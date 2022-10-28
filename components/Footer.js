import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <div className = "w-full flex justify-center py-1 sm:py-2 items-center border-t-[1px] border-t-gray-200">
        <div>{date}  DreamHome, Inc</div>
    </div>
  )
}

export default Footer