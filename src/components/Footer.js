import React from 'react'

const Footer = () => {
  const year = new Date()
  return (
    <div className='text-lg text-center py-2 '>
      <p>Created by Akash @ {year.getFullYear()}</p>
    </div>
  )
}

export default Footer