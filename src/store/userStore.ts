import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface IUser {
  role: string;
  name: string;
  token: string;
}

interface IUserStore {
  user: IUser | null;
  login: (_u: IUser) => void;
  logout: () => void;
}

export const useUserStore = create(
  persist<IUserStore>(
    (set) => ({
      user: null,
      login: (u: IUser) => set({ user: u }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'vc-user',
      storage: createJSONStorage(() => localStorage),
      version: 1,
    },
  ),
);
