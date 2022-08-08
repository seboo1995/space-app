import {React,useState} from 'react'
import './Destination.css'
import myData from '../../assets/data.json';
import moon from '../../assets/destination/image-moon.png'

const Destination = () => {
  const path  = '../../assets/destination'
  const all_destination = myData.destinations
  console.log(all_destination)

  // const [planet, setPlanet] = useState(all_destination[0].name)
  const [planet_image, setPlanetImage] = useState("")

  // src/assets/destination/image-moon.png
  return (
       <div>

    <h2> PICK YOUR DESTINATION </h2>

     <img  src = {planet_image}/> 
   {/* <img src={moon}/> */}

    <ul>
      <li onClick={() => {setPlanetImage(all_destination[0].images.png)}}> Moon </li>
      <li> Mars </li>
      <li> Titan  </li>
      <li> Europa </li> 
    </ul>



    







    </div>
  )
}

export default Destination