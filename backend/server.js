import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
const PORT = process.env.PORT || 5000

dotenv.config();

db();

const app = express();

app.use(express.json())

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound)

app.use(errorHandler);

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode, on port ${PORT}`.cyan.bold))