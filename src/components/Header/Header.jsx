import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
        <header className="header">
     <div className="container">
        <div className="header-main">
           <div className="logo">
              <a href="#">Logo</a>
           </div>
           <div className="open-nav-menu">
              <span></span>
           </div>
           <div className="menu-overlay">
           </div>
          
           <nav className="nav-menu">
             <div className="close-nav-menu">
                <img src="#" alt="close"/>
             </div>
             <ul className="menu">
                <li className="menu-item menu-item-has-children">
                   <a href="#" data-toggle="sub-menu">Home</a>
                   <ul className="sub-menu">
                       <li className="menu-item"><a href="#">Easy Catch</a></li>
                       <li className="menu-item"><a href="#">Different Affairs</a></li>
                       <li className="menu-item"><a href="#">Cooperations Ocations</a></li>
                       <li className="menu-item"><a href="#">Random Activites</a></li>
                   </ul>
                </li>
                <li className="menu-item">
                   <a href="#">About</a>
                </li>
                <li className="menu-item">
                   <a href="#">Services</a>
                </li>
                <li className="menu-item menu-item-has-children">
                   <a href="#" data-toggle="sub-menu">Pages <i className="plus"></i></a>
                   <ul className="sub-menu">
                       <li className="menu-item"><a href="#">page 1</a></li>
                       <li className="menu-item"><a href="#">page 2</a></li>
                       <li className="menu-item"><a href="#">page 3</a></li>
                       <li className="menu-item"><a href="#">page 4</a></li>
                   </ul>
                </li>
                <li className="menu-item">
                   <a href="#">News</a>
                </li>
                <li className="menu-item">
                   <a href="#">Contact</a>
                </li>
                <li className="menu-item">
                   <a className='Button' href="#">Login</a>
                </li>
             </ul>
           </nav>
        </div>
     </div>
  </header>
    </div>
  )
}

export default Header