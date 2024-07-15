import mongoose from 'mongoose'

const stockPriceSchema = new mongoose.Schema({
  id: String,
  symbol: String,
  name: String,
  price: Number,
  image: String,
  lowestIn24h: Number,
  highestIn24h: Number,
  timestamp: Date,
})

export const StockPrice = mongoose.model('StockPrice', stockPriceSchema)
