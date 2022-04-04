import React, { useState } from 'react'
import Login from './login'

function Sign() {
  const [toggle, setToggle] = useState<boolean>(false)

  const onToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <section className="flex justify-center items-center w-full h-full">
      {toggle ? <section>Register</section> : <Login onToggle={onToggle} />}
    </section>
  )
}

export default Sign
