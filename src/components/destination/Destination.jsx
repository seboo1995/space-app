import {React,useState,useRef} from 'react'
import './Destination.css'
import myData from '../../assets/data.json';

const Destination = () => {
  const all_destination = myData.destinations
  const [imageSrc, setImageSrc] = useState(all_destination[0].images.png)
  const [desc, setDesc] = useState(all_destination[0].description)
  const [dist, setDist] = useState(all_destination[0].distance)
  const [travel, setTravel] = useState(all_destination[0].travel)
  const list_items = useRef();
  
  const changeSrc = (e) => {
    const t = all_destination.filter((obj) => {
    if (e.currentTarget.textContent.toLowerCase().trim() ===  obj.name.toLowerCase().trim() ) {
        return true
    }})
    setDesc(t[0].description)
    setDist(t[0].distance)
    setTravel(t[0].travel)
    setImageSrc(t[0].images.png)
    all_destination.forEach((obj) => {
      if (e.currentTarget.textContent.toLowerCase().trim() === obj.name.toLowerCase().trim()) {
          document.getElementById(obj.name).style.opacity = 0.5
      }
      // this should be changed when refactoring
      else {
        document.getElementById(obj.name).style.opacity = 1
      }


    })
   
  }

  return (
       <div className='destination-container'>

    <h2> PICK YOUR DESTINATION </h2>
     <img src={imageSrc} alt = 'asl' id='222'/> 
    <h2> PICK YOUR DESTINATION </h2>

      <ul ref = {list_items}>
        {all_destination.map((destination) => {
          return (
            <button onClick={changeSrc} key={destination.name} id={destination.name}> {destination.name}</button>

            
          )
        })}  
    </ul>
    <p> {desc}</p>
    <h3> AVG.DISTANCE {dist}</h3>
    <br></br>
    <h3> EST.TRAVEL TIME {travel}</h3>
    </div>
  )
}

export default Destination