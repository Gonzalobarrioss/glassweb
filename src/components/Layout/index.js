import React from 'react'
import { LayoutContainer, Circle } from './LayoutElements'

function Layout({children}) {
  return (
    <LayoutContainer>
        {children}
        <Circle id={0}/>
        <Circle id={1}/>
    </LayoutContainer>
  )
}

export default Layout