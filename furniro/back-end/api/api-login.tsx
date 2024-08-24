import http from 'http';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const server = http.createServer(async (req, res) => {
  const urlParts = req.url?.split('/');
  const method = req.method;
  const isRegisterRoute = method === 'POST' && urlParts?.[1] === 'register';
  const isLoginRoute = method === 'POST' && urlParts?.[1] === 'login';

  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    if (isRegisterRoute) {
      const { name, email, password } = JSON.parse(body);

      interface DataSing {
        name: string;
        email_address: string;
        password: string;
        // adicione as outras propriedades necessárias aqui
      }

      const userData: UserCreateInput = {
        name,
        email_address: email,
        password,
        // adicione as outras propriedades necessárias aqui
      }; 

      try {
        const user = await prisma.user.create({
          data: userData,
        });
        // ...
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
      } 
      catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Erro ao registrar usuário' }));
      }
    } else if (isLoginRoute) {
      const { email , password } = JSON.parse(body);

      try {
        const user = await prisma.user.findUnique({
          where: {
            email_addres: email ,
          },
        });

        if (user && user.password === password) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Login realizado com sucesso' }));
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Email ou senha incorretos' }));
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Erro ao realizar login' }));
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Rota não encontrada' }));
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});