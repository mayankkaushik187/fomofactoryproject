import type { NextPage } from 'next'
import { useState } from 'react'
import CryptoTable from '../components/CryptoTable'
import ChangeCryptoModal from '../components/ChangeCryptoModal'

const Home: NextPage = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('bitcoin')
  const [isModalOpen, setModalOpen] = useState(false)

  const handleCryptoChange = (crypto: string) => {
    setSelectedCrypto(crypto)
    setModalOpen(false)
  }

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Change Crypto</button>
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
