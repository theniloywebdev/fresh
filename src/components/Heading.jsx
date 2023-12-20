import React from 'react'

const Heading = (props,className) => {
  return (
    <props.as className={`${className} font-poppinF font-semibold text-[64px]  pr-[100px]`}>{props.text}</props.as>
  )
}

export default Heading




