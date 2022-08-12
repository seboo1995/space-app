import React from 'react'
import './Crew.css'
import myData from "../../assets/data.json"
import { useState } from 'react'

const Crew = () => {
  const all_crew = myData.crew
  const [imageSrc, setImageSrc] = useState(all_crew[0].images.png)
  const [role, setRole] = useState(all_crew[0].role)
  const [bio, setBio] = useState(all_crew[0].bio)
  const [crewname, setCrewName] = useState(all_crew[0].name)
  const [counter, setCounter] = useState(0);

  const changeSrc = (e) => {
    const t = all_crew.filter((obj) => {
    if (e.currentTarget.id.toLowerCase().trim() ===  obj.name.toLowerCase().trim() ) {
        return true
    }})
    setRole(t[0].role)
    setBio(t[0].bio)
    setCrewName(t[0].name)
    setImageSrc(t[0].images.png)
    setCounter(counter+1);
    
    all_crew.forEach((obj) => {
      
      if (e.currentTarget.id.toLowerCase().trim() === obj.name.toLowerCase().trim()) {
          document.getElementById(obj.name).style.opacity = 0.5
      }
      else {
        document.getElementById(obj.name).style.opacity = 1
      }


    })
   
  }

  return (
    <div className='crew-container'>

    <h2>Meet your crew </h2>
     <img src={imageSrc} alt = 'asl' id='222'/> 

      <ul>
        {all_crew.map((crew) => {
          return (

           
            <button onClick={ changeSrc} key={crew.name} id={crew.name}> </button>
            
            
          )
        })}  
    </ul>
    <p> {bio}</p>
    <h3> {role}</h3>
    <br></br>
    <h3>{crewname}</h3>
    </div>
  )
}

export default Crew