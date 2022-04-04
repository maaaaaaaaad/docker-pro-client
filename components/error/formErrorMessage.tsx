import React from 'react'

interface IFormErrorMessage {
  message: string
}

function FormErrorMessage({ message }: IFormErrorMessage) {
  return <section className="text-sm font-bold text-red-700">{message}</section>
}

export default FormErrorMessage
