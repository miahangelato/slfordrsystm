'use client';

import { create } from 'zustand';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type SafeUser = {
  id: number;
  tenantId: number;
  username: string;
  email: string;
  fullName: string | null;
  role: string;
  languagePreference: string | null;
  isActive: boolean;
  lastLoginAt: string | null;
  createdAt: string;
  updatedAt: string;
};

interface AuthState {
  user: SafeUser | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  loadMe: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  async login(email, password) {
    set({ isLoading: true, error: null });
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || 'Login failed');
      }

      const user = json.data.user as SafeUser;

      set({ user, isLoading: false });
    } catch (err: any) {
      set({ error: err.message ?? 'Login failed', isLoading: false });
    }
  },

  async loadMe() {
    set({ isLoading: true });
    try {
      const res = await fetch(`${API_URL}/auth/me`, {
        credentials: 'include',
      });

      if (!res.ok) {
        set({ user: null, isLoading: false });
        return;
      }

      const json = await res.json();
      set({ user: json.data as SafeUser, isLoading: false });
    } catch {
      set({ user: null, isLoading: false });
    }
  },

  async logout() {
    try {
      await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
    } finally {
      set({ user: null });
    }
  },
}));
