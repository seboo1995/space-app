import React, { useRef } from 'react'
import '../MyNavBar/nav.css'
import logo from '../../pics/logo.svg'
export const MyNavBar = () => {

    const label_ref = useRef()
    // close ham menu when pressed a destination
    
    const close_ham = () => {
        console.log('Inside closed ham')
        label_ref.current.checked = false;
        console.log(label_ref.current)
    }
    
    // console.log(label_ref.current.checked)

    return (
        <div>
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
                        <li><a href="#">00 Home </a></li>
                        <li><a href="#">05 Added </a></li>
                        <li><a href="#">01 Destination</a></li>
                        <li><a href="#">02 Crew </a></li>
                        <li><a href="#">03 Technology </a></li>
                    </ul>
                </div>
            </header>

        </div >
    )
}
