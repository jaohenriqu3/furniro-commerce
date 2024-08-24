import http from 'http';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const server = http.createServer(async (req, res) => {
  const urlParts = req.url?.split('/') || [];
  const isProductsRoute = urlParts[1] === 'api' && urlParts[2] === 'products';

  if (req.method === 'GET' && isProductsRoute && urlParts.length === 3) {
    try {
      const products = await prisma.product.findMany();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(products));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  } else if (req.method === 'GET' && isProductsRoute && urlParts.length === 4) {
    const productId = urlParts[3];
    try {
      const product = await prisma.product.findUnique({
        where: { id: productId },
      });

      if (product) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(product));
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Product Not Found');
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


