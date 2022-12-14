import {React,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
const Home = () => {

  useEffect(()  => {
    document.body.classList.add('home-container');

    return () => {
        document.body.classList.remove('home-container');
    };
});


  return (
    <div>

      <div class="angry-grid">
        <div class="pos-text">
        <div id="item-0-home">
        <p id='initial-text'>
            So, you want to travel to
        </p>
  </div>
        <div id="item-1-home">
        <h1 id='spc'>SPACE</h1>
  </div>
  <div id="item-2-home"><p id='second-text'>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it. 
            Well sit back, and relax because we'll give
            you a truly out of this world experience!
        </p></div>
        </div>
        <div id="item-3-home">
        <div>
                <Link to="/destination">
                <button id="exp-btn">  
                EXPLORE
                </button>
                </Link>
      </div>    
  </div>
</div>
    </div>
  )
}

export default Home