import { execSync } from 'child_process';

try {
  console.log('Adding all files...');
  execSync('git add .', { stdio: 'inherit' });
  console.log('Committing...');
  execSync('git commit -m "ci: switch to GitHub native Pages deployment (deploy-pages)"', { stdio: 'inherit' });
  console.log('Pushing...');
  execSync('git push', { stdio: 'inherit' });
  console.log('Successfully pushed to GitHub. Deployment will start via GitHub Actions.');
} catch (err) {
  console.error('Deployment failed:', err.message);
}
