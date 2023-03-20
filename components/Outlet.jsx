import React from 'react'
import Header from './Header'

const Outlet = (props) => {
  return (
    <div>
        <Header />
        {props.children}
    </div>
  )
}

export default Outlet