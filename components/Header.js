import React from 'react'
import Topbanner from './Header/Topbanner'
import Nav from './Header/Nav'
import Bottombanner from './Header/Bottombanner'
import Categories from './Header/Categories'
function Header() {
  return (
    <div>
      <Topbanner />
      <Nav />
      <Bottombanner />
      <Categories />
    </div>
  )
}

export default Header
