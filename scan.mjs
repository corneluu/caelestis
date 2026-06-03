import fs from 'fs';
import path from 'path';

function scanDir(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(scanDir(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

console.log('PDFs:');
console.log(scanDir('public/pdfs').join('\n'));
console.log('\nAudio:');
console.log(scanDir('public/audio').join('\n'));
