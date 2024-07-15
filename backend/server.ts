import express from 'express'
import mongoose, { ConnectOptions } from 'mongoose'
import axios from 'axios'
import dotenv from 'dotenv'
import { StockPrice } from './models/StockPrice'
import cryptoRoutes from './routes/crypto'
import cors from 'cors'
import { BASE_URI } from './constants/constants'
dotenv.config()

const app = express()
const port = process.env.PORT || 8080
const apiKey = process.env.API_KEY as string

mongoose.connect(
  process.env.MONGODB_URI as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions
)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connected to MongoDB')
})
app.use(cors())
app.use('/api/crypto', cryptoRoutes)

const fetchStockData = async () => {
  try {
    const options = {
      method: 'GET',
      url: BASE_URI,
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': process.env.API_KEY,
      },
    }
    const response = await axios.request(options)

    const data = response.data
    console.log(data)
    // Store data in MongoDB
    data.forEach(async (entry: any) => {
      const newPrice = new StockPrice({
        id: entry.id,
        name: entry.name,
        symbol: entry.symbol,
        price: entry.current_price,
        image: entry.image,
        highestIn24h: entry.high_24h,
        lowestIn24h: entry.low_24h,
        timestamp: new Date(),
      })
      await newPrice.save()
    })
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Polling every 10 seconds
setInterval(fetchStockData, 60000)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
