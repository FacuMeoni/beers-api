import { readJSON, formatText } from "../utils.js";
import { randomUUID } from 'node:crypto';  
const beers = readJSON('./beers.json');

export class beerModel {
 static async getAll ({ name, type}) {
  if (name) {
    return beers.filter(beer => formatText(beer.name).includes(formatText(name)));
  } 
  if (type) {
    console.log(beers);
    return beers.filter( beer => formatText(beer.type).includes(formatText(type)));
  }
  return beers
 }

 static async getById(id) {
  return beers.find(beer => beer.id === id);
 }

 static async postBeer({ input }) {

  const beerExists = beers.find(beer => beer.name === input.name);
  if(beerExists) return false;
  
  const newBeer = {
    id: randomUUID(),
    ...input
  }

  beers.push(newBeer);

  return newBeer;
 }

 static async updateBeer({ id , input }) {
  const index = beers.findIndex(beer => beer.id === id);
  if(index === -1) return false;

  beers[index] = {
    ...beers[index],
    ...input
  }

    return beers[index];
 }

 static async deletedBeer(id) {
  const index = beers.findIndex(beer => beer.id === id);

  if(index === -1) return false;

  beers.splice(index, 1);

  return 'Beer deleted successfully'
 }
}