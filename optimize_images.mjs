import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import https from 'https';
import sharp from 'sharp';

const pagesDir = path.join(process.cwd(), 'src/pages');
const publicImagesDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        return fetchBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get ${url} (${res.statusCode})`));
      }
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

const urlRegex = /https:\/\/(images\.unsplash\.com|upload\.wikimedia\.org|picsum\.photos)[^"'\s]*/g;

async function processAndOptimize() {
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
  let urlMap = {};

  // First, extract all unique URLs and generate hashes
  for (const file of files) {
    const filePath = path.join(pagesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = Array.from(content.matchAll(urlRegex)).map(m => m[0]);
    
    for (const url of matches) {
      if (!urlMap[url]) {
         let cleanUrl = url.replace(/&amp;/g, '&');
         const hash = crypto.createHash('md5').update(cleanUrl).digest('hex').slice(0, 10);
         const newFilename = `img_${hash}.webp`;
         urlMap[url] = { cleanUrl, hash, newFilename, publicPath: `/images/${newFilename}` };
      }
    }
  }

  // Next, download and optimize each unique image
  console.log(`Found ${Object.keys(urlMap).length} unique images to optimize.`);
  
  for (const [originalUrl, meta] of Object.entries(urlMap)) {
    const destPath = path.join(publicImagesDir, meta.newFilename);
    if (!fs.existsSync(destPath)) {
      console.log(`Optimizing: ${meta.cleanUrl}...`);
      try {
        const buffer = await fetchBuffer(meta.cleanUrl);
        await sharp(buffer)
          .webp({ quality: 80, effort: 4 }) // Highly optimized format
          .toFile(destPath);
        console.log(` -> Saved ${meta.newFilename}`);
      } catch (e) {
        console.error(` -> Failed for ${meta.cleanUrl}:`, e.message);
      }
    }
  }

  // Finally, replace URLs in the files
  for (const file of files) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    for (const [originalUrl, meta] of Object.entries(urlMap)) {
      if (content.includes(originalUrl)) {
        content = content.replace(new RegExp(originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), meta.publicPath);
        updated = true;
      }
    }

    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated paths in ${file}`);
    }
  }
}

processAndOptimize().then(() => console.log('All images optimized!')).catch(console.error);
