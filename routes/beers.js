import { Router } from 'express';
import { beerController } from '../controllers/beers.js';

export const beersRouter = Router();

beersRouter.get('/', beerController.getAll); 
beersRouter.get('/:id', beerController.getByID);
beersRouter.post('/', beerController.postBeer);
beersRouter.patch('/:id', beerController.updateBeer);
beersRouter.delete('/:id', beerController.deleteBeer);
