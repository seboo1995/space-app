import {React,useState,useRef,useEffect} from 'react'
import './Destination.css'
import myData from '../../assets/data.json';

const Destination = () => {

  const all_destinations = myData.destinations
  const [destID, setDestID] = useState(0);
  const destination_ref = useRef()

  useEffect(function(){
     const intervalRef =  setInterval(function(){
      let nextIndex =  (( destID+ 1) % 4)
      changeSrc(nextIndex)

     },2000)

      return () => clearInterval(intervalRef)
  },[destID])

  useEffect(()  => {
    document.body.classList.add('destination-container');

    return () => {
        document.body.classList.remove('destination-container');
    };
});




   function changeSrc(index) {
    setDestID(index);
    for (const btn of destination_ref.current.children) {
     
   btn.style.opacity = 0.5;
      
    }
    destination_ref.current.children[index].style.opacity = 1;   
  }

  return (
    <div>

<h2> PICK YOUR DESTINATION </h2>
     <img src={all_destinations[destID].images.png} alt = 'asl' id='222'/> 

      <ul ref={destination_ref}>
        {all_destinations.map((crew,index) => {
          return (
            <button onClick={()=> changeSrc(index)} key={crew.name} id={crew.name}> </button>
          )
        })}  
    </ul>
    <p id="desc-text"> {all_destinations[destID].description}</p>
    <h3> AVG.DISTANCE </h3>
    <p id='dist-text'>{all_destinations[destID].distance}</p>
    <br></br>
    <h3> EST.TRAVEL TIME </h3>
    <p id="travel-text">{all_destinations[destID].travel}</p>
    </div>
  )
}

export default Destination