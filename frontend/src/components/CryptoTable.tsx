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
    return <div className="text-center">Loading...</div>
  }

  if (status === 'failed') {
    return <div className="text-center text-red-500">Error: {error}</div>
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Current Price(USD)
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              24hr Lowest(USD)
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              24hr Highest(USD)
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Timestamp
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((entry, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-whit'}`}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={entry.image} alt={entry.name} className="h-8 w-8" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{entry.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {entry.lowestIn24h}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {entry.highestIn24h}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {new Date(entry.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CryptoTable
