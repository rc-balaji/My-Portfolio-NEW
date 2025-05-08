import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function log(message, source = "express") {
  console.log(`${new Date().toLocaleTimeString()} [${source}] ${message}`);
}

export async function setupVite(app, server) {
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
    root: path.resolve(__dirname, '..'),
  });

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);

  log('Vite dev server started', 'vite');
}

export function serveStatic(app) {
  // Import express only when needed (for production)
  import('express').then(({ default: express }) => {
    // Serve static assets from the dist folder (for production)
    app.use(express.static(path.resolve(__dirname, '../dist')));

    // Always return the index.html for client-side routing
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    });

    log('Serving static assets', 'express');
  });
}