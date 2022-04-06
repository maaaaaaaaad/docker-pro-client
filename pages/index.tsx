import type { NextPage } from 'next'
import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { isToken } from '../_recoil/state'
import Sign from './_auth/sign'
import { USER } from '../_axios/user'
import MainHeader from '../components/headers/mainHeader'

const Index: NextPage = () => {
  const [isUser, setIsUser] = useRecoilState(isToken)
  const getCurrentUser = useCallback(async () => {
    const data = await USER()
    if (!data) {
      return setIsUser(false)
    }
    return setIsUser(true)
  }, [])
  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])
  return (
    <section className="w-full h-full">
      {isUser ? (
        <section className="overflow-y-scroll w-full h-full">
          <MainHeader />
          <main>Hi</main>
        </section>
      ) : (
        <Sign />
      )}
    </section>
  )
}

export default Index
