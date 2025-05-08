import { createServer } from 'http';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { parse } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 8000;

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  let path = parsedUrl.pathname;
  
  // Default to index.html for root path
  if (path === '/') {
    path = '/client/index.html';
  }
  
  // Serve static files
  const filePath = join(__dirname, path);
  
  const contentTypeMap = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.svg': 'image/svg+xml',
  };
  
  // Get the file extension
  const extname = String(path.split('.').pop()).toLowerCase();
  const contentType = contentTypeMap[`.${extname}`] || 'application/octet-stream';
  
  // Read and serve the file
  const fileStream = createReadStream(filePath);
  
  fileStream.on('open', () => {
    res.writeHead(200, { 'Content-Type': contentType });
    fileStream.pipe(res);
  });
  
  fileStream.on('error', () => {
    // If request is for a non-existent file, serve index.html (SPA routing)
    if (extname === '') {
      const indexPath = join(__dirname, 'client/index.html');
      const indexStream = createReadStream(indexPath);
      
      indexStream.on('open', () => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        indexStream.pipe(res);
      });
      
      indexStream.on('error', () => {
        res.writeHead(404);
        res.end('Not found');
      });
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});