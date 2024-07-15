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
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Change Crypto</h2>
        <input
          type="text"
          value={crypto}
          onChange={(e) => setCrypto(e.target.value)}
        />
        <button onClick={handleSubmit}>Change</button>
      </div>
    </div>
  )
}

export default ChangeCryptoModal
