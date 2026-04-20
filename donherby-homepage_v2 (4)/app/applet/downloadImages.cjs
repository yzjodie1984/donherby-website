//
const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => new Promise((resolve, reject) => {
  const file = fs.createWriteStream(dest);
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, response => {
    if (response.statusCode === 301 || response.statusCode === 302) {
      return download(response.headers.location, dest).then(resolve).catch(reject);
    }
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      resolve();
    });
  }).on('error', err => {
    fs.unlink(dest, () => {});
    reject(err);
  });
});

async function run() {
  const dir = path.join(__dirname, 'public', 'services');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const images = {
    'ocean.jpg': 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800',
    'air.jpg': 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=800',
    'rail.jpg': 'https://images.unsplash.com/photo-1558284589-3cb3e7fb02a3?auto=format&fit=crop&q=80&w=800',
    'hybrid.jpg': 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&q=80&w=800',
    'warehouse.jpg': 'https://images.unsplash.com/photo-1553413002-f3f08ebf80a4?auto=format&fit=crop&q=80&w=800',
    'compliance.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  };

  for (const [name, url] of Object.entries(images)) {
    try {
      await download(url, path.join(dir, name));
      console.log('Downloaded', name);
    } catch (e) {
      console.error('Failed', name, e);
    }
  }
}
run();
