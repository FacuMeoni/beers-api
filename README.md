# Beer API 🍻

A simple API for managing beers, powered by Node.js and Express. Beers are stored and managed using a JSON file. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on beer data.

## How to use it
1. Clone repository
```bash
git clone https://github.com/FacuMeoni/beers-api.git
```
2. Install dependencies using [pnpm](https://pnpm.io/) inside project folder.
```bash 
# Install pnpm globally if you don't have it:
npm install -g pnpm

# Install dependencies:
pnpm install
```
3. Run the development server
```bash
pnpm dev
```
## 👉 Endpoints
- GET `/beers` = Retrieve all beers.
- GET `/beers/:id` = Retrieve a beer by ID.
- GET `/beers?name=beerName` = Retrieve a beer by name.
- GET `/beers?type=beerType` =  Retrieve beers by type.
- POST `/beers` = Add a new beer (body: { name, type, price, rating and image }).
- DELETE `/beers/:id` = Delete a beer by ID.
- PATCH `/beers/:id` = Update a beer by ID (body: updated fields).

## ⚒️ Technologies Used
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/es/)
- [Zod](https://zod.dev/)
- [Nodemon](https://nodemon.io/)


> [!WARNING]
> If you are experimenting a CORS error with "Access-Control-Allow-Origin", add your host to the accepted origins:
>![carbon](https://github.com/FacuMeoni/beers-api/assets/122312072/1ca4d9a7-d2d7-4e10-858a-3311cd97db9f)


Enjoy it! 😁
