import express, { Request, Response } from 'express'
import { StockPrice } from '../models/StockPrice'

const router = express.Router()

router.get('/:id', async (req: Request, res: Response) => {
  try {
    // res.header('Access-Control-Allow-Origin', '*')
    const id = req.params.id
    const data = await StockPrice.find({ id }).sort({ timestamp: -1 }).limit(20)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' })
  }
})

export default router
