# Beer API 🍻

A simple API for managing beers, powered by Node.js and Express. Beers are stored and managed using a JSON file. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on beer data.

## How to use it

### 1. Clone repository 

```bash
git clone https://github.com/FacuMeoni/beer-api.git
```

### 2. Install dependencies

```bash
cd beers-api
```
Use the packager manager [pnpm](https://pnpm.io/) to install dependecis

``` bash
pnpm install 
```

### Run the server development

```bash
pnpm run dev
```

### Api endpoints:

- GET /beers:  = Retrieve all beers.
- GET /beers/:id = Retrieve a beer by ID.
- GET /beers?name=beerName = Retrieve a beer by name.
- GET /beers?type=beerType =  Retrieve beers by type.
- POST /beers = Add a new beer (body: { name, type, price, rating and image }).
- DELETE /beers/ = Delete a beer by ID.
- PATCH /beers/ = Update a beer by ID (body: updated fields).

### Technologies Used

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/es/)
- [Zod](https://zod.dev/)
- [Nodemon](https://nodemon.io/)


>[!warning]
>By default, the server runs on port 3000. If you need to change the port, update the image URLs in the JSON file (beers.json) to reflect the new port number.

Enjoy it! :)
