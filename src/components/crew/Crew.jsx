import React from 'react'
import './Crew.css'
import myData from "../../assets/data.json"
import { useState,useRef } from 'react'
import { useEffect } from 'react'

const Crew = () => {
  const all_crew = myData.crew
  const [currentPersonID, setCurrentPersonID] = useState(0);
  const crew_ref = useRef()

  useEffect(function(){
     const intervalRef =  setInterval(function(){
      let nextIndex =  (( currentPersonID+ 1) % 4)
      changeSrc(nextIndex)

     },2000)

      return () => clearInterval(intervalRef)
  },[currentPersonID])

  useEffect(()  => {
    document.body.classList.add('crew-container');

    return () => {
        document.body.classList.remove('crew-container');
    };
});




   function changeSrc(index) {
    setCurrentPersonID(index);
    for (const btn of crew_ref.current.children) {
     
   btn.style.opacity = 0.5;
      
    }
    crew_ref.current.children[index].style.opacity = 1;   
  }

  return (
    <div id="items-crew">
      <div className='item-0'>
    <h2> <p id='item-0-num'> 02 </p>Meet your crew </h2>
    </div>
    <div className='item-1'>
    <h3 id='role-text'> {all_crew[currentPersonID].role} </h3>
    </div>
    <div className='item-2'>
    <h1 id='firsthead-font'>{all_crew[currentPersonID].name}</h1>
    </div> 
    <div className='item-3'>
     <img src={all_crew[currentPersonID].images.png} alt = 'asl' id='im'/> 
     </div>
     <div className='item-4'>
      <ul ref={crew_ref}>
        {all_crew.map((crew,index) => {
          return (
            <button onClick={()=> changeSrc(index)} key={crew.name} id={crew.name}> </button>
          )
        })}  
    </ul>
    </div>
    <div className='item-5'>
    <p id='bio-text'> {all_crew[currentPersonID].bio}</p>
    </div>

    </div>
  )
}

export default Crew