import React from 'react';
import './Nav.css';
import NavItem from './NavItem';

function Nav() {
  return (
    <div className='nav-container'>
        <div className='nav'>
            <NavItem title = 'ADD USER' link = '/' />
            <NavItem title = 'USER LIST' link = '/users-list'/>
            <NavItem title = 'PRODUCT '/>
            <NavItem title = 'PRODUCT LIST'/>


        </div>

    </div>
  )
}

export default Nav