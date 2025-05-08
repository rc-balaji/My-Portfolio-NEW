// Direct JavaScript server starter that doesn't rely on any existing configuration
import express from 'express';
import fs from 'fs';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express application
const app = express();
const server = createServer(app);
const PORT = 5000; // Use port 5000 to match the existing configuration

// Middleware to parse JSON
app.use(express.json());

// Serve static files from client directory
app.use(express.static(join(__dirname, 'client')));

// Create API endpoints
app.get('/api/data', (req, res) => {
  res.json({ message: 'API is working!' });
});

// For all other routes, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client/index.html'));
});

// Start the server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JavaScript portfolio server running at http://localhost:${PORT}`);
});