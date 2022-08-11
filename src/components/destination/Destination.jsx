import {React,useState} from 'react'
import './Destination.css'
import myData from '../../assets/data.json';

const Destination = () => {
  const all_destination = myData.destinations
  const [imageSrc, setImageSrc] = useState(all_destination[0].images.png)
  // console.log(all_destination)
  const changeSrc = (e) => {
    const t = all_destination.filter((obj) => {
    if (e.currentTarget.textContent.toLowerCase().trim() ===  obj.name.toLowerCase().trim() ) {
        return true
    }})
    
    setImageSrc(t[0].images.png)   
  }

  return (
       <div className='destination-container'>

    <h2> PICK YOUR DESTINATION </h2>

     <img src={imageSrc} /> 

      <ul>
        {all_destination.map((destination) => {
        // return <li onClick={setImageSrc(`${path}+image-${destination.name}`)} > {destination.name} </li>
          return <li onClick={ changeSrc} key={destination.name}> {destination.name}</li>
        })}  
      {/* <li> Moon </li>
      <li> Mars </li>
      <li> Titan  </li>
      <li> Europa </li>  */}
    </ul>



    







    </div>
  )
}

export default Destination