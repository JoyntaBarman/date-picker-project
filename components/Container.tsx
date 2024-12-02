import React from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    className?: string,
    children: React.ReactNode
}

const Container = ({className, children}: Props) => {
  return (
      <div className={twMerge("container mx-auto", className)}>{children}</div>
  )
}

export default Container