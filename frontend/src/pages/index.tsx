import type { NextPage } from 'next'
import { useState } from 'react'
import CryptoTable from '../components/CryptoTable'
import ChangeCryptoModal from '../components/ChangeCryptoModal'
import '../app/globals.css'
import { toLower } from '@/utils/helper'

const Home: NextPage = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin')
  const [isModalOpen, setModalOpen] = useState(false)

  const handleCryptoChange = (crypto: string) => {
    setSelectedCrypto(crypto)
    setModalOpen(false)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row text-center justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-4">Coin</h1>
        <h1 className="text-3xl font-bold text-center mb-4 text-yellow-500">
          XO
        </h1>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        {['Bitcoin', 'Ethereum', 'Tether', 'Binance Coin', 'Solana'].map(
          (crypto, index) => (
            <button
              key={index}
              onClick={() => setSelectedCrypto(toLower(crypto))}
              className={`${
                selectedCrypto === toLower(crypto)
                  ? 'bg-yellow-500'
                  : 'bg-gray-700'
              } text-white py-2 px-4 rounded hover:${
                selectedCrypto === toLower(crypto)
                  ? 'bg-yellow-500'
                  : 'bg-gray-600'
              }`}
            >
              {crypto}
            </button>
          )
        )}
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
