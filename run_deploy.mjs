import { execSync } from 'child_process';

try {
  console.log('Adding all files...');
  execSync('git add .', { stdio: 'inherit' });
  console.log('Committing...');
  execSync('git commit -m "Update audio files"', { stdio: 'inherit' });
  console.log('Pushing...');
  execSync('git push', { stdio: 'inherit' });
  console.log('Successfully deployed to GitHub.');
} catch (err) {
  console.error('Deployment failed:', err.message);
}
