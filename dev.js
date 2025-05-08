// Custom development server launcher
// This script will be used by the npm run dev command
// to launch our JavaScript server instead of TypeScript
console.log('Starting JavaScript development server...');

try {
  process.env.NODE_ENV = 'development';
  import('./server/index.js');
} catch (error) {
  console.error('Failed to start JavaScript server:', error);
  
  // If JavaScript server fails, we'll try to use the TypeScript server
  // using the original tsx command
  const { spawn } = require('child_process');
  console.log('Falling back to TypeScript server...');
  
  const p = spawn('tsx', ['server/index.ts'], { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'development' }
  });
  
  p.on('error', (err) => {
    console.error('Failed to start TypeScript server:', err);
    process.exit(1);
  });
}