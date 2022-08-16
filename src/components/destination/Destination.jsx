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
<div className='item-0'>
  <p id='item-0-numb'>01</p>
<p id='item-0-text'>PICK YOUR DESTINATION </p>
</div>
    <div className='item-1'>
     <img src={all_destinations[destID].images.png} alt = 'asl' id='im'/> 
     </div>
     <div className='item-2'>
      <ul ref={destination_ref}>
        {all_destinations.map((destination,index) => {
          return (
            <button onClick={()=> changeSrc(index)} key={destination.name} id={destination.name}> {destination.name} </button>
          )
        })}  
    </ul>
    </div>
    <div className='item-3'>
    <h1> {all_destinations[destID].name}</h1>
    <p id="desc-text"> {all_destinations[destID].description}</p>
    </div>
    <hr id='hor-line'/>

    <div className = 'item-4'>
    <h3> AVG.DISTANCE </h3>
    <p id='dist-text'>{all_destinations[destID].distance}</p>
    </div>
    <div className='item-5'>
    <h3> EST.TRAVEL TIME </h3>
    <p id="travel-text">{all_destinations[destID].travel}</p>
    </div>
    </div>
  )
}

export default Destination