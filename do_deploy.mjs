import { execSync } from 'child_process';

try {
  console.log('Adding files...');
  execSync('git add src/songs.ts', { stdio: 'inherit' });
  console.log('Committing...');
  execSync('git commit -m "Update songs order to 17 items"', { stdio: 'inherit' });
  console.log('Pushing...');
  execSync('git push', { stdio: 'inherit' });
  console.log('Successfully deployed to GitHub.');
} catch (err) {
  console.error('Deployment failed:', err.message);
}
