import { useState } from 'react'
import SizeInput from './components/SizeInput'
import UnitSelect from './components/UnitSelect'
import ResultTable from './components/ResultTable'
import { convertSize, type Unit } from './utils/convertSize'

export default function App() {
  const [value, setValue] = useState<string>('')
  const [unit, setUnit] = useState<Unit>('KB')

  const result = convertSize(value, unit)

  return (
    <main>
      <h1>File Size Calculator</h1>

      <SizeInput value={value} onChange={setValue} />
      <UnitSelect unit={unit} onChange={setUnit} />

      <ResultTable result={result} />
    </main>
  )
}
