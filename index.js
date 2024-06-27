const express = require('express');
const app = express();
const cors = require('cors');
const { validateBeer, partialValidateBeer } = require('./schemas/beer.js');
const { randomUUID } = require('crypto');
const { allBeers } = require('./beers.json');
const formatText = (text) => text.toLowerCase().replace(/\s+/g, '');

app.use(express.json());
app.use('/assets', express.static('assets'));
app.use(cors());

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
        }
        ul {
          display: flex;
          justify-content:center;
          flex-direction: column;
          gap:10px;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to the Beer API by Facundo Meoni</h1>
      <p>Endpoints:</p>
      <ul>
        <li> Get all beers: <code>/beers</code></li>
        <li> Get beer by ID: <code>/beers/:id</code></li>
        <li> Get beer by name: <code>/beers?name=beerName</code></li>
        <li> Get beer by type: <code>/beers?type=beerType</code></li>
        <li> Add a new beer: <code>POST /beers</code> (body: {name, type, price, rating, image})</li>
        <li> Update a beer: <code>PATCH /beers/:id</code> (body: updated fields)</li>
      </ul>
    </body>
    </html>
        
    `);
})

app.get('/beers', (req, res) => {

    const { name, type } = req.query;

    if (name) {
        const beer = allBeers.filter(beer => formatText(beer.name).includes(formatText(name)));
        if (!beer.length) return res.status(404).json({ error: "Beer not found"});

        return res.json(beer);
    } 
    if (type) {
        const filteredBeers = allBeers.filter(beer => formatText(beer.type).includes(formatText(type)));
        if (!filteredBeers.length) return res.status(404).json({ error: "Beers's type not found"});
        return res.json(filteredBeers);
    }

    res.json(allBeers)
});

app.get('/beers/:id', (req, res) => {
    const { id } = req.params;
    const beer = allBeers.find(beer => beer.id === id);
    if (!beer) return res.status(404).json({ message: 'Beer not found' });

    return res.json(beer);
});

app.post('/beers', (req, res) => {
    const beer = req.body

    const { data, error } = validateBeer(beer);
    
    if(error) return res.status(400).json({ error: error.errors });

    allBeers.push({
        id: randomUUID(),
        ...data
    });

    return res.status(201).json({ message: "Beer added successfully" });
})

app.patch('/beers/:id', (req, res ) => {
   const { id } = req.params;
   const beerIndex = allBeers.findIndex(beer => beer.id === id);
   if (beerIndex === -1) return res.status(404).json({ error : "Beer not found" });

   const validateBeer = partialValidateBeer(req.body);
    if(validateBeer.error) return res.status(400).json({ error: validateBeer.error.errors });

    allBeers[beerIndex] = {
        ...allBeers[beerIndex],
        ...validateBeer.data
    }

    console.log(validateBeer.data);

    res.status(200).json({ message: "Beer updated successfully" });
})

app.delete('/beers/:id', (req, res) => {
  const { id } = req.params;
  const beerIndex = allBeers.findIndex(beer => beer.id === id);

  if(beerIndex === -1) return res.status(404).json({ error: "Beer not found" });

  allBeers.splice(beerIndex, 1);

  res.status(200).json({ message: "Beers deleted successfully"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});