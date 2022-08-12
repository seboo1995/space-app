import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <div className='home-container'>
        <div>
        <p id='initial-text'>
            So, you want to travel to
        </p>
        <h1>SPACE</h1>
        <p id='second-text'>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it. 
            Well sit back, and relax because we'll give
            you a truly out of this world experience!
        </p>
        </div>
        <div>
                <Link to="/destination">
                <button id="exp-btn">  
                EXPLORE
                </button>
                </Link>
        </div>
    </div>
  )
}

export default Home