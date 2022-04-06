import React, { useCallback, useEffect, useState } from 'react'
import _login from './_login'
import _register from './_register'
import { useRecoilValue } from 'recoil'
import { userState } from '../../_recoil/state'
import { useRouter } from 'next/router'

function Sign() {
  const router = useRouter()
  const [toggle, setToggle] = useState<boolean>(false)
  const user = useRecoilValue(userState)

  const onToggle = () => {
    setToggle((prev) => !prev)
  }

  const isUser = useCallback(async () => {
    user && (await router.push('/'))
  }, [])

  useEffect(() => {
    isUser()
  }, [isUser])

  return (
    <section className="flex justify-center items-center w-full h-full">
      {toggle ? (
        <_register onToggle={onToggle} />
      ) : (
        <_login onToggle={onToggle} />
      )}
    </section>
  )
}

export default Sign
