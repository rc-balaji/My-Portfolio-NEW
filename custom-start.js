// Custom starter script to load the Vite server with our JavaScript configuration
import { createServer } from 'vite';
import express from 'express';
import { createServer as createHttpServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function start() {
  // Create Express application with HTTP server
  const app = express();
  const httpServer = createHttpServer(app);
  
  try {
    console.log('Starting Vite with JavaScript JSX support...');
    
    // Create Vite server with our custom config
    const vite = await createServer({
      configFile: join(__dirname, 'vite.config.jsfix.js'),
      server: { 
        middlewareMode: true 
      }
    });
    
    // Apply Vite middleware to Express app
    app.use(vite.middlewares);
    
    // Start the server
    const PORT = 5000;
    httpServer.listen(PORT, '0.0.0.0', () => {
      console.log(`JavaScript portfolio server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start Vite server:', err);
    process.exit(1);
  }
}

start().catch(console.error);