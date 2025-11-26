"use client"

import type React from "react"

import { FormEvent, useState } from "react"
import { DiningIcon } from "../icons/dining-icon"
import { EmailInput } from "../form/email-input"
import { PasswordInput } from "../form/password-input"
import { Checkbox } from "../form/checkbox"
import { useAuthStore } from "@/src/store/authStore"

export function LoginCard() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  const { login, isLoading, error, user } = useAuthStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password);
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsLoading(true)
  //   // TODO: Connect to NestJS backend
  //   console.log("Login attempt:", { email, password, rememberMe })
  //   setTimeout(() => setIsLoading(false), 1000)
  // }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-3xl border-2 border-gray-800 p-8 shadow-lg">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <DiningIcon className="w-20 h-20 text-gray-700" />
          <h1 className="text-2xl font-bold text-purple-700">店舗管理システム</h1>
          <p className="text-sm text-gray-500">Store Management System</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <EmailInput value={email} onChange={setEmail} />
          <PasswordInput value={password} onChange={setPassword} />

          <Checkbox checked={rememberMe} onChange={setRememberMe} label="ログイン状態を保持する" />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "ログイン中..." : "ログイン"}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-6">
          <a href="#" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
            パスワードをお忘れですか？
          </a>
        </div>
      </div>
    </div>
  )
}
