import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const originalUrls = [
  "https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80&w=2670",
  "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2670",
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=2670",
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2670",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80&w=1600",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/CN_8015%2C_5690_and_5517_Hinton_-_Jasper.jpg/960px-CN_8015%2C_5690_and_5517_Hinton_-_Jasper.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Haven_van_Rotterdam_2023_%2804%29.jpg/960px-Haven_van_Rotterdam_2023_%2804%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/Warehouse_in_New_Jersey_where_trucks_deliver_granite_slabs.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Burchardkai-Nacht-%28Hamburg%29-msu-2021-4873-.jpg/1280px-Burchardkai-Nacht-%28Hamburg%29-msu-2021-4873-.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Busan-port-from-Busan-tower-2.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Port_of_Singapore.jpg/1280px-Port_of_Singapore.jpg",
  "https://picsum.photos/seed/retail/800/800"
];

const pagesDir = path.join(process.cwd(), 'src/pages');

async function processFiles() {
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
  
  // Build a map of hash -> URL
  const hashMap = {};
  for (const url of originalUrls) {
    let cleanUrl = url.replace(/&amp;/g, '&');
    
    // Convert to highly optimized Unsplash URL
    let optimizedUrl = cleanUrl;
    if (optimizedUrl.includes('unsplash.com') && !optimizedUrl.includes('fm=webp')) {
      optimizedUrl += '&fm=webp';
    }

    const hash = crypto.createHash('md5').update(cleanUrl).digest('hex').slice(0, 10);
    
    // Map everywhere this hash might have been written
    hashMap[`/optimized_images/img_${hash}.webp`] = optimizedUrl;
    hashMap[`/images/img_${hash}.webp`] = optimizedUrl;
    hashMap[`/images/img_${hash}.jpg`] = optimizedUrl;
  }
  
  for (const file of files) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    let updated = false;
    for (const [localPath, remoteUrl] of Object.entries(hashMap)) {
      if (content.includes(localPath)) {
        content = content.replace(new RegExp(localPath.replace(/\//g, '\\/'), 'g'), remoteUrl);
        updated = true;
      }
    }
    
    if (updated) {
       fs.writeFileSync(filePath, content, 'utf8');
       console.log(`Rewrote images in ${file} to use external optimized CDN URLs`);
    }
  }
}

processFiles().catch(console.error);
