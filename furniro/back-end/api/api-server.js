import http from 'http';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todas as origens. 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Métodos permitidos
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeçalhos permitidos

  // Verifica se é uma requisição OPTIONS (pré-vôo)
  if (req.method === 'OPTIONS') {
    res.writeHead(204); // Status 204 indica que a requisição foi bem-sucedida, mas não precisa de resposta
    res.end();
    return;
  }

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
