import fs from 'fs';
import path from 'path';

const map = {
  'cantec-15': 'cantec-17',
  'cantec-11': 'cantec-12',
  'cantec-10': 'cantec-11',
  'cantec-7': 'cantec-8',
  'cantec-4': 'cantec-5',
  'cantec-3': 'cantec-4'
};

const dirs = ['public/pdfs', 'public/audio'];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;

  // Step 1: rename to temp
  const tempMap = {};
  for (const [oldId, newId] of Object.entries(map)) {
    const oldPath = path.join(dir, oldId);
    if (fs.existsSync(oldPath)) {
      const tempPath = path.join(dir, `temp_${newId}`);
      fs.renameSync(oldPath, tempPath);
      tempMap[tempPath] = path.join(dir, newId);
    }
  }

  // Step 2: rename temp to final
  for (const [tempPath, finalPath] of Object.entries(tempMap)) {
    // if finalPath exists (like old cantec-8), we might overwrite it or we should remove it first?
    // Let's just rename, it should work if it's empty, or we can just move files.
    // Actually if finalPath exists, fs.renameSync might fail if it's a non-empty directory.
    if (fs.existsSync(finalPath)) {
      const backup = finalPath + '_backup';
      if (!fs.existsSync(backup)) {
        fs.renameSync(finalPath, backup);
      } else {
         // clean up
         fs.rmSync(finalPath, { recursive: true, force: true });
      }
    }
    fs.renameSync(tempPath, finalPath);
  }
}

console.log('Renamed successfully.');
