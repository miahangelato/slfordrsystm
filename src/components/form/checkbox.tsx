"use client"

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
}

export function Checkbox({ checked, onChange, label }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 border-2 border-gray-800 rounded cursor-pointer"
      />
      {label && <label className="text-sm text-gray-700 cursor-pointer">{label}</label>}
    </div>
  )
}
