import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';

const pagesDir = path.join(process.cwd(), 'src/pages');
const publicImagesDir = path.join(process.cwd(), 'public/images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };
    https.get(url, options, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 308) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
      }

      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

const urlRegex = /https:\/\/(images\.unsplash\.com|upload\.wikimedia\.org|picsum\.photos)[^"'\s]*/g;

async function processFiles() {
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
  
  for (const file of files) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const matches = Array.from(content.matchAll(urlRegex)).map(m => m[0]);
    
    if (matches.length === 0) continue;
    
    console.log(`Processing ${file}... found ${matches.length} images.`);
    
    let updated = false;
    for (const url of matches) {
      let cleanUrl = url.replace(/&amp;/g, '&');
      
      const hash = crypto.createHash('md5').update(cleanUrl).digest('hex').slice(0, 10);
      const ext = '.jpg';
      const filename = `img_${hash}${ext}`;
      const destPath = path.join(publicImagesDir, filename);
      const publicPath = `/images/${filename}`;
      
      if (!fs.existsSync(destPath)) {
        console.log(`Downloading ${cleanUrl}...`);
        try {
          await downloadImage(cleanUrl, destPath);
        } catch (e) {
             console.error(`Failed to download ${cleanUrl}:`, e.message);
             // Skip replacing if download failed
             continue;
        }
      }
      
      // Keep going with replacement
      content = content.replace(url, publicPath);
      updated = true;
    }
    
    if(updated) {
       fs.writeFileSync(filePath, content, 'utf8');
       console.log(`Updated ${file}`);
    }
  }
}

processFiles().then(() => console.log('Done.')).catch(console.error);
