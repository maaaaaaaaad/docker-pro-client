import React from 'react'

interface IDefaultLayout {
  children: React.ReactNode
}

function DefaultLayout({ children }: IDefaultLayout) {
  return <section className="w-full h-full p-4">{children}</section>
}

export default DefaultLayout
