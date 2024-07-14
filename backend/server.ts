import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import axios from 'axios';
import dotenv from 'dotenv';
import { StockPrice } from './models/StockPrice';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const apiKey = process.env.API_KEY as string;

mongoose.connect(process.env.MONGODB_URI as string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const fetchStockData = async () => {
  try {
    const response = await axios.post('https://api.livecoinwatch.com/coins/list', {
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
      },
      data: {
        currency: 'USD',
        sort: 'rank',
        order: 'ascending',
        offset: 0,
        limit: 5,
        meta: false,
      },
    });

    const data = response.data;

    // Store data in MongoDB
    data.forEach(async (entry: any) => {
      const newPrice = new StockPrice({
        symbol: entry.code,
        price: entry.rate,
        timestamp: new Date(),
      });
      await newPrice.save();
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Polling every 10 seconds
setInterval(fetchStockData, 10000);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
