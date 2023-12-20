import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`${className} font-poppinF text-[24px]`}>{text}</button>
  )
}

export default Button