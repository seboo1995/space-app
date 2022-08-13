import React, { useRef } from 'react'
import '../MyNavBar/nav.css'
import logo from '../../assets/shared/logo.svg'
import { Link } from "react-router-dom"
export const MyNavBar = () => {

    const label_ref = useRef()
    // close ham menu when pressed a destination
    const close_ham = () => {
        label_ref.current.checked = false;
    }

    // 

    return (
        <div className='navbar'>
            <header className="header-bar">
                <div className="logo">
                    <a href='#'> <img src={logo} /> </a>
                </div>
                <input type="checkbox" id="toggle-btn" ref={label_ref} />
                <label className="menuicon" htmlFor="toggle-btn" >
                    <span className="bars"></span>
                </label>
                <div className="menu" onClick={close_ham}>
                    <ul>
                        <li>
                            <Link to="/home" >
                                00 Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/destination">
                                01 Destination
                            </Link>
                        </li>
                        <li>
                            <Link to="/crew">
                                02 Crew
                            </Link>
                        </li>
                        <li>
                            <Link to="/technology">
                                03 Technology
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

        </div >
    )
}
