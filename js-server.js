import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createServer } from 'http';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create the Express app
const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

// Serve static files from the client directory
app.use(express.static(join(__dirname, 'client')));

// Always return the index.html for any request that doesn't match a static file
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client/index.html'));
});

// Start the server
server.listen(PORT, () => {
  console.log(`JavaScript server running at http://localhost:${PORT}`);
});