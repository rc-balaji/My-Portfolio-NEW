#!/usr/bin/env node

/*
 * Standalone JavaScript server for running the portfolio website.
 * This script can be used to start the client application without TypeScript.
 * Run with: node start-client.js
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createServer } from 'http';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express application
const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 8000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, 'client')));

// API endpoint
app.get('/api/info', (req, res) => {
  res.json({
    name: 'Balaji Portfolio',
    version: '1.0.0',
    type: 'JavaScript-based Client Application',
    mode: 'Production'
  });
});

// For all other routes, serve the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

// Start the server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JavaScript portfolio server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop');
});