import { useState } from 'react'

interface ChangeCryptoModalProps {
  onClose: () => void
  onCryptoChange: (crypto: string) => void
}

const ChangeCryptoModal: React.FC<ChangeCryptoModalProps> = ({
  onClose,
  onCryptoChange,
}) => {
  const [crypto, setCrypto] = useState('')

  const handleSubmit = () => {
    onCryptoChange(crypto)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <span
          className="absolute top-2 right-2 cursor-pointer text-xl"
          onClick={onClose}
        >
          &times;
        </span>
        <h2 className="text-xl font-bold mb-4">Change Crypto</h2>
        <input
          type="text"
          value={crypto}
          onChange={(e) => setCrypto(e.target.value.toLowerCase())}
          className="border p-2 w-full mb-4"
          placeholder="Enter Crypto Symbol"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Change
        </button>
      </div>
    </div>
  )
}

export default ChangeCryptoModal
