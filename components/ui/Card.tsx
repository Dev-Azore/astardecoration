import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass border border-white/5 overflow-hidden transition-all duration-500 ${className}`}>
      {children}
    </div>
  )
}

export default Card
