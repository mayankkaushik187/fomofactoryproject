import type { NextPage } from 'next'
import { useState } from 'react'
import CryptoTable from '../components/CryptoTable'
import ChangeCryptoModal from '../components/ChangeCryptoModal'
import '../app/globals.css'

const Home: NextPage = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin')
  const [isModalOpen, setModalOpen] = useState(false)

  const handleCryptoChange = (crypto: string) => {
    setSelectedCrypto(crypto)
    setModalOpen(false)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Crypto Prices</h1>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setSelectedCrypto('bitcoin')}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Bitcoin
        </button>
        <button
          onClick={() => setSelectedCrypto('ethereum')}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Ethereum
        </button>
        <button
          onClick={() => setSelectedCrypto('tether')}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Tether
        </button>
        <button
          onClick={() => setSelectedCrypto('binancecoin')}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Binance Coin
        </button>
        <button
          onClick={() => setSelectedCrypto('solana')}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Solana
        </button>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-gray-500 text-white py-2 px-4 rounded"
        >
          Change
        </button>
      </div>
      <CryptoTable selectedCrypto={selectedCrypto} />
      {isModalOpen && (
        <ChangeCryptoModal
          onClose={() => setModalOpen(false)}
          onCryptoChange={handleCryptoChange}
        />
      )}
    </div>
  )
}

export default Home
