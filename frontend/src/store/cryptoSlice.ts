import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface CryptoState {
  data: any[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: CryptoState = {
  data: [],
  status: 'idle',
  error: null,
}

export const fetchCryptoData = createAsyncThunk(
  'crypto/fetchCryptoData',
  async (crypto: string) => {
    const response = await axios.get(
      `http://localhost:8080/api/crypto/${crypto}`
    )
    console.log(response)
    return response.data
  }
)

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message!
      })
  },
})

export default cryptoSlice.reducer
