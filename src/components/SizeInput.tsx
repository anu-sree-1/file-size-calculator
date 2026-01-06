type Props = {
  value: string
  onChange: (value: string) => void
}

export default function SizeInput({ value, onChange }: Props) {
  return (
    <div>
      <label htmlFor="size">File size</label>
      <input
        id="size"
        type="number"
        step="any"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
