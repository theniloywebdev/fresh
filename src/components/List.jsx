import React from 'react'

const List = ({manuName,href}) => {
  return (
    <li><a href={href}>{manuName}</a></li>
  )
}

export default List