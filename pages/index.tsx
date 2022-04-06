import type { NextPage } from 'next'
import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../_recoil/state'
import Sign from './auth/sign'
import { USER } from '../_axios/user'
import MainHeader from '../components/headers/mainHeader'
import { useRouter } from 'next/router'

const Index: NextPage = () => {
  const router = useRouter()
  const [user, setUser] = useRecoilState(userState)

  const getCurrentUser = useCallback(async () => {
    const api = await USER()
    if (!api) {
      return await router.push('/auth/sign')
    }
    return setUser(api.data)
  }, [])

  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])

  return (
    <section className="w-full h-full">
      {user ? (
        <section className="overflow-y-scroll w-full h-full">
          <MainHeader />
          <main>{user && user.email}</main>
        </section>
      ) : (
        <Sign />
      )}
    </section>
  )
}

export default Index
