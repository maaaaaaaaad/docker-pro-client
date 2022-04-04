import type { NextPage } from 'next'
import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { isToken } from '../_recoil/state'
import Sign from './_auth/sign'
import { USER } from '../_axios/user'

const Home: NextPage = () => {
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
    <section className="w-full h-screen">
      {isUser ? (
        <section className="overflow-y-scroll">Home</section>
      ) : (
        <Sign />
      )}
    </section>
  )
}

export default Home
