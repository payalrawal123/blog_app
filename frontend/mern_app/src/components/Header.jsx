import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  return (
    <>
    <nav>
        <div className="container nav_container">
            <Link to="/" className='nav_logo'>
            <img width="100px" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" alt="" srcset="" />
            </Link>
            <ul className="nav_menu">
                <li><Link to='/profile'>Ernest Achiever</Link></li>
                <li><Link to='/create'>Create Post</Link></li>
                <li><Link to='/authors'>Authors</Link></li>
                <li><Link to='/logout'>Logout</Link></li>

            </ul>
            {/* <FaBars /> */}
            <button className="nav_toggle_btn">
             <AiOutlineClose />
            </button>
        </div>
    </nav>
    </>
  )
}

export default Header
