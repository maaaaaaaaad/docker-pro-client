import React from 'react'

interface IDefaultLayout {
  children: React.ReactNode
}

function DefaultLayout({ children }: IDefaultLayout) {
  return <section className="w-full h-screen">{children}</section>
}

export default DefaultLayout
