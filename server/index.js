import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { setupVite, log, serveStatic } from './vite.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express application
const app = express();
const server = createServer(app);

// Set up static file serving and Vite middleware
app.use(express.json());

// Error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
});

// Setup Vite middleware for development
const isDev = process.env.NODE_ENV === 'development';
if (isDev) {
  await setupVite(app, server);
} else {
  serveStatic(app);
}

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  log(`serving on port ${PORT}`);
});