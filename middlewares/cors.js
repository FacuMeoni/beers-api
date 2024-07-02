import cors from 'cors';
const ACCEPTED_ORIGINS = ['http://localhost:3001', 'http://localhost:8080'];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if(!origin || acceptedOrigins.includes(origin)){
      return callback(null, true);
    } else { 
      return callback(new Error('Not allowed by CORS'));
    }
  }
});