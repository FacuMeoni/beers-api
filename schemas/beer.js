import z  from 'zod';

const beerSchema = z.object({
    name: z.string({
        invalid_type_error: 'Beer name must be a string',
        required_error: 'Beer name is required'
    }),
    type: z.string({
        invalid_type_error: 'Beer type must be a string',
        required_error: 'Beer type is required'
    }),
    price: z.number().positive(),
    image: z.string().url({
        message: 'Image must be a URL'
    }),
    rating: z.number().int().min(0).max(5).default(0),
})

export const validateBeer = (beer) => {
    return beerSchema.safeParse(beer)
}

export const partialValidateBeer = (beer)  => {
    return beerSchema.partial().safeParse(beer)
}
