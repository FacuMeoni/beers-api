import express, { json } from 'express';
import { beersRouter } from './routes/beers.js';
import { corsMiddleware } from './middlewares/cors.js';

const app = express();
app.use(json());
app.disable('x-powered-by'); 
app.use(corsMiddleware());

app.get('/', (req, res) => {
    res.send(`
         <html>
    <head>
      <style>
        body {
          font-family: sans-serif;
          line-height: 1.5;
          padding: 20px;
          margin: 0 auto;
          max-width: 600px;
        }
        ul {
          display: flex;
          justify-content:center;
          flex-direction: column;
          gap:10px;
        }

        h2 {
        font-weight: 500;
        margin: 0;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to the Beers API</h1>
      
      <h2>Endpoints</h2>
      <ul>
        <li>/beers</li>
        <li>/beers?name=</li>
        <li>/beers?type=</li>
        <li>/beers/:id</li>
      </ul>
    </body>
    </html>
        
    `);
})

app.use('/beers', beersRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 