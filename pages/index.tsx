import type { NextPage } from 'next'
import { useCallback, useEffect } from 'react'
import { USER } from '../_axios/user'
import { useRecoilState } from 'recoil'
import { userState } from '../_recoil/state'

const Home: NextPage = () => {
  const [isUser, setIsUser] = useRecoilState(userState)
  const getCurrentUser = useCallback(async () => {
    const user = await USER()
    if (!user) {
      setIsUser(null)
    }
  }, [])
  useEffect(() => {
    getCurrentUser()
  }, [getCurrentUser])
  return (
    <section>
      {isUser ? <section>Home</section> : <section>Login</section>}
    </section>
  )
}

export default Home
