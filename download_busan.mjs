import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

const url = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Busan-port-from-Busan-tower-2.jpg';
const destPath = path.join(process.cwd(), 'public', 'images', 'img_10fb11f8c5.webp');

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

async function run() {
  console.log('Downloading Busan image...');
  try {
    const buffer = await fetchBuffer(url);
    await sharp(buffer).webp({ quality: 80, effort: 4 }).toFile(destPath);
    console.log('Successfully saved to', destPath);
  } catch (e) {
    console.error('Error:', e.message);
  }
}

run();
