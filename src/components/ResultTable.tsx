import type { ConversionResult } from '../utils/convertSize'

type Props = {
  result: ConversionResult | null
}

export default function ResultTable({ result }: Props) {
  if (!result) return null

  return (
    <table aria-label="conversion results">
      <tbody>
        {Object.entries(result).map(([unit, value]) => (
          <tr key={unit}>
            <th>{unit}</th>
            <td>{value.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
