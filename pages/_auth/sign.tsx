import React, { useState } from 'react'
import Login from './login'
import Register from './register'

function Sign() {
  const [toggle, setToggle] = useState<boolean>(false)

  const onToggle = () => {
    setToggle((prev) => !prev)
  }

  return (
    <section className="flex justify-center items-center w-full h-full">
      {toggle ? (
        <Register onToggle={onToggle} />
      ) : (
        <Login onToggle={onToggle} />
      )}
    </section>
  )
}

export default Sign
