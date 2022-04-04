import { atom } from 'recoil'

export type User = {
  pk: number | null
  email: string | null
  password: string | null
  nickname: string | null
  avatarImage?: string | null
  social?: string | null
  createAt: Date | null
  updateAt: Date | null
  deleteAt: Date | null
}

export const userState = atom<Omit<User, 'password'> | null>({
  key: 'userState',
  default: {
    pk: null,
    email: null,
    nickname: null,
    avatarImage: null,
    social: null,
    createAt: null,
    updateAt: null,
    deleteAt: null,
  },
})

export const isToken = atom<boolean>({
  key: 'isToken',
  default: false,
})
