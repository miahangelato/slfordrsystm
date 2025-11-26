"use client"

interface EmailInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
}

export function EmailInput({
  value,
  onChange,
  placeholder = "manager@example.com",
  label = "メールアドレス",
}: EmailInputProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border-2 border-gray-800 rounded-full focus:outline-none focus:border-purple-600 transition-colors"
      />
    </div>
  )
}
