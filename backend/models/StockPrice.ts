import mongoose from 'mongoose';

const stockPriceSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: Date,
});

export const StockPrice = mongoose.model('StockPrice', stockPriceSchema);
