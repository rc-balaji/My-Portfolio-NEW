import { createServer } from 'http';
import express from 'express';

export async function registerRoutes(app) {
  const server = createServer(app);

  // API routes go here
  app.get('/api/status', (req, res) => {
    res.json({ status: 'ok', mode: process.env.NODE_ENV });
  });

  return server;
}