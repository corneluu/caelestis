import fs from 'fs';
import path from 'path';

function listFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(listFiles(fullPath));
    } else {
      results.push(fullPath);
    }
  });
  return results;
}

const files = listFiles('public/audio');
console.log(`Found ${files.length} files in public/audio:`);
files.forEach(f => console.log(f));
