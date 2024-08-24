const http = require('http');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/api/products')) {
    const id = req.url.split('/').pop(); // Pega o ID da URL

    try {
      if (id) {
        const product = await prisma.product.findUnique({ where: { id: parseInt(id, 10) } });
        if (product) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(product));
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Product not found');
        }
      } else {
        const products = await prisma.product.findMany();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
      }
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3001, () => {
  console.log('API server running on http://localhost:3001');
});
