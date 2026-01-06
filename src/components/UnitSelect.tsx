import type { Unit } from '../utils/convertSize'

type Props = {
  unit: Unit
  onChange: (unit: Unit) => void
}

export default function UnitSelect({ unit, onChange }: Props) {
  return (
    <div>
      <label htmlFor="unit">Unit</label>
      <select
        id="unit"
        value={unit}
        onChange={(e) => onChange(e.target.value as Unit)}
      >
        <option value="B">Bytes</option>
        <option value="KB">KB</option>
        <option value="MB">MB</option>
        <option value="GB">GB</option>
      </select>
    </div>
  )
}
