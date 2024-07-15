// frontend/src/components/CryptoTable.tsx
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCryptoData } from '../store/cryptoSlice'
import { AppDispatch, RootState } from '../store/store'

interface CryptoTableProps {
  selectedCrypto: string
}

const CryptoTable: React.FC<CryptoTableProps> = ({ selectedCrypto }) => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, status, error } = useSelector(
    (state: RootState) => state.crypto
  )

  useEffect(() => {
    dispatch(fetchCryptoData(selectedCrypto))
    const interval = setInterval(() => {
      dispatch(fetchCryptoData(selectedCrypto))
    }, 10000)

    return () => clearInterval(interval)
  }, [dispatch, selectedCrypto])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
          <tr key={index}>
            <td>{entry.id}</td>
            <td>{entry.price}</td>
            <td>{new Date(entry.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CryptoTable
