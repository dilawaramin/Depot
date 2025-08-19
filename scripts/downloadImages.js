// scripts/downloadImages.js
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// read the JSON list of URLs
const jsonPath = path.join(__dirname, '../imageLinks.json');
const images = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// ensure output dir exists
const outDir = path.resolve(__dirname, '../public/images/aggregrates');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

async function downloadImage(url) {
  const filename = path.basename(new URL(url).pathname);
  const filepath = path.join(outDir, filename);
  const response = await axios.get(url, { responseType: 'stream' });
  const writer = fs.createWriteStream(filepath);
  response.data.pipe(writer);
  return new Promise((res, rej) => {
    writer.on('finish', () => {
      console.log(`✅ ${filename}`);
      res();
    });
    writer.on('error', rej);
  });
}

(async () => {
  for (const url of images) {
    try {
      await downloadImage(url);
    } catch (err) {
      console.error(`❌ ${url} → ${err.message}`);
    }
  }
  console.log('All downloads complete!');
})();
