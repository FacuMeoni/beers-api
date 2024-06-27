### Beer API
This is a simple API for managing beers, powered by Node.js and Express. Beers are stored and managed using a JSON file. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on beer data.

## Technologies Used
● Node.js
● Express
● Nodemon
● Zod


## Features
Search: Retrieve beers by ID, name, or type.
Add: Add a new beer to the collection.
Delete: Remove a beer from the collection by its ID.
Update: Modify an existing beer's information.
Port Configuration: The default port is set to 3000. If you wish to change it, update the image URLs in the JSON file accordingly.


## Installation
To get started with the Beer API, follow these steps:

Clone the repository:

git clone https://github.com/FacuMeoni/beer-api.git
cd beer-api
Install dependencies:

pnpm install
# or
npm install

Run the development server:

pnpm run dev 
# or
npm run dev

This command starts the server using Nodemon, which watches for file changes and restarts the server automatically.

## Access the API:

Open your browser or use an API testing tool like Postman and access the API endpoints as described below.

# API Endpoints

GET /beers: Retrieve all beers.
GET /beers/
: Retrieve a beer by ID.
GET /beers?name=beerName: Retrieve a beer by name.
GET /beers?type=beerType: Retrieve beers by type.
POST /beers: Add a new beer (body: { name, type, price, quantity }).
DELETE /beers/
: Delete a beer by ID.
PATCH /beers/
: Update a beer by ID (body: updated fields).


## Changing the Port
By default, the server runs on port 3000. If you need to change the port, update the image URLs in the JSON file (beers.json) to reflect the new port number.

Enjoy it! :)