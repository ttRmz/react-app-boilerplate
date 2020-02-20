import React from 'react'

export function PageTitle({ children, ...props }) {
  return (
    <h1 className="PageTitle" {...props}>
      {children}
    </h1>
  )
}
