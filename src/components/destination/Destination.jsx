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

     },2500)

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
    <div className='items-destination'>
<div className='item-0-dest'>
  <p id='item-0-dest-numb' >01 &nbsp;</p>
<p id='item-0-dest-text'>PICK YOUR DESTINATION </p>
</div>
    <div className='item-1-dest'>
     <img src={all_destinations[destID].images.png} alt = 'asl' id='im-dest'/> 
     </div>
     <div className='item-2-dest'>
      <ul ref={destination_ref}>
        {all_destinations.map((destination,index) => {
          return (
            <button onClick={()=> changeSrc(index)} key={destination.name} id={destination.name}> {destination.name} </button>
          )
        })}  
    </ul>
    </div>
    <div className='item-3-dest'>
    <h1> {all_destinations[destID].name}</h1>
    <p id="desc-text"> {all_destinations[destID].description}</p>
    </div>
    
    
    <div className='item-4-5-grid'>
      <div className='hor-line-div'>
    <hr id='hor-line-dest'/>
    </div>
    <div className = 'item-4-dest'>
    <h3> AVG.DISTANCE </h3>
    <p id='dist-text'>{all_destinations[destID].distance}</p>
    </div>
    <div className='item-5-dest'>
    <h3> EST.TRAVEL TIME </h3>
    <p id="travel-text">{all_destinations[destID].travel}</p>
    </div>
    </div>
    </div>
  )
}

export default Destination