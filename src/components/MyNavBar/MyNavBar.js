import React, { useRef, useEffect } from 'react'
import '../MyNavBar/nav.css'
import logo from '../../assets/shared/logo.svg'
import { Link } from "react-router-dom"
export const MyNavBar = () => {

    const label_ref = useRef()
    const target_tab_ref = useRef()


    const check_tab = (e,target) => {
        e.currentTarget.classList.add('active_tab')
        for (const i of e.currentTarget.parentNode.parentNode.children) {
            if (i.children[0].textContent != e.currentTarget.textContent){
                i.children[0].classList.remove('active_tab');
            }
        } 
        // if on mobile close tha ham menu
        label_ref.current.checked = false;
    }

    function close_ham(){ 
        label_ref.current.checked = false;
        document.body.classList.toggle('change_nav_background')
    }

    // check the current tab
    

    // maybe this could be done with a if statement,
    // but I am not really good at them
    useEffect(() => {
    const href = window.location.href.split('/')
    const target_tab = href.pop()
    console.log(target_tab)
    for (const tab of target_tab_ref.current.children) {
           if (target_tab === ''){
             tab.children[0].classList.add('active_tab')
             break
           }
        if(tab.children[0].textContent.toLowerCase().includes(target_tab.toLowerCase())){
          tab.children[0].classList.add('active_tab')
          console.log(tab)
          break;
          }
     }
        
    },[])
    



    // 

    return (
        <div className='navbar'>
            <header className="header-bar">
                <div className="logo">
                    <a href='#'> <img src={logo} /> </a>
                </div>
                <input type="checkbox" id="toggle-btn" ref={label_ref}/>
                <label className="menuicon" htmlFor="toggle-btn" >
                    <span className="bars"></span>
                </label>
                <div className="menu">
                    <ul ref={target_tab_ref} onClick={close_ham}>
                        <li >
                            <Link to="/home" onClick={check_tab}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/destination"onClick={check_tab} >
                                Destination
                            </Link>
                        </li>
                        <li>
                            <Link to="/crew" onClick={check_tab}>
                                Crew
                            </Link>
                        </li>
                        <li>
                            <Link to="/technology" onClick={check_tab}>
                                Technology
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

        </div >
    )
}