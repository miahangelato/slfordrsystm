"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Checkbox } from "@/src/components/ui/checkbox"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-500">
        {/* Header with Icon */}
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            <svg
              className="w-16 h-16 text-gray-700"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Fork */}
              <line x1="15" y1="20" x2="15" y2="50" />
              <line x1="15" y1="35" x2="10" y2="30" />
              <line x1="15" y1="35" x2="20" y2="30" />
              <line x1="15" y1="35" x2="15" y2="30" />
              {/* Plate */}
              <circle cx="50" cy="50" r="25" />
              <circle cx="50" cy="50" r="20" fill="none" />
              {/* Knife */}
              <line x1="80" y1="20" x2="80" y2="60" />
              <polygon points="80,60 75,70 85,70" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">店舗管理システム</h1>
          <p className="text-xs text-gray-500">Store Management System</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
            <Input
              type="email"
              placeholder="manager@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 rounded-full border-2 border-gray-300 px-4 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">パスワード</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 rounded-full border-2 border-gray-300 px-4 pr-10 focus:border-purple-500 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 text-lg"
              >
                {showPassword ? "👁️‍🗨️" : "●"}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              // onCheckedChange={setRememberMe}
              className="w-5 h-5 rounded border-2 border-gray-300"
            />
            <label htmlFor="remember" className="text-sm text-gray-700">
              ログイン状態を保持する
            </label>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold text-base transition-all"
          >
            {isLoading ? "ログイン中..." : "ログイン"}
          </Button>

          {/* Forgot Password Link */}
          <div className="text-center">
            <a href="#" className="text-xs text-gray-500 hover:text-purple-500 transition-colors">
              パスワードをお忘れですか?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
