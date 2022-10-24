import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <div className = "w-full flex justify-center items-center border border-t-gray-200">
        <div>{date}  Realtor, Inc</div>
    </div>
  )
}

export default Footer