import { beerModel } from '../models/beer.js';
import { validateBeer, partialValidateBeer } from '../schemas/beer.js';

export class beerController { 
    static async getAll (req, res) {

        const { name, type } = req.query;
    
        const beers = await beerModel.getAll({ name, type });
    
        res.json(beers)
    }

    static async getByID (req, res) {
        const { id } = req.params;
        const beer = await beerModel.getById(id);
        if (!beer) return res.status(404).json({ message: 'Beer not found' });
    
        return res.json(beer);
    }

    static async postBeer (req, res) {
        const beer = req.body
    
        const { data, error } = validateBeer(beer);
        
        if (error) return res.status(400).json({ error: error.errors });
    
        const newBeer = await beerModel.postBeer({ input: data });

        if (!newBeer) return res.status(400).json({ error: "Beer already exists" });
    
        return res.status(201).json({ message: "Beer added successfully", newBeer });
    }

    static async updateBeer (req, res ) {
        const { id } = req.params;
        const { data, error } = partialValidateBeer(req.body);
     
        if(error)return res.status(400).json({ error: error.errors });
     
        const updateBeer = await beerModel.updateBeer({ id, input: data });
        if(!updateBeer)return res.status(404).json({ message: "Beer not found" });
        
         return res.status(200).json({ message: "Beer updated successfully", updateBeer });
    }

    static async deleteBeer (req, res) {
        const { id } = req.params;
      
        const beerDeleted = await beerModel.deletedBeer(id);
      
        if(!beerDeleted) return res.status(404).json({ error: "Beer not found" });
      
        res.status(200).json({ message: beerDeleted } )
    }
}