import {React,useState} from 'react'
import './Technology.css'
import myData from '../../assets/data.json';

const Technology = () => {
  const all_technology = myData.technology
  const [imageSrc, setImageSrc] = useState(all_technology[0].images.portrait)
  const [techname, setTechName] = useState(all_technology[0].name)
  const [desc, setDesc] = useState(all_technology[0].description)

  
  const changeSrc = (e) => {
    const t = all_technology.filter((obj) => {
    if (e.currentTarget.textContent.toLowerCase().trim() ===  obj.name.toLowerCase().trim() ) {
        return true
    }})
    setDesc(t[0].description)
    setTechName(t[0].name)
    setImageSrc(t[0].images.portrait)
    all_technology.forEach((obj) => {
      if (e.currentTarget.textContent.toLowerCase().trim() === obj.name.toLowerCase().trim()) {
          document.getElementById(obj.name).style.opacity = 0.5
      }
      else {
        document.getElementById(obj.name).style.opacity = 1
      }


    })
   
  }

  return (
       <div className='technology-container'>

    <h2> SPACE LAUNCH 101 </h2>
     <img src={imageSrc} alt = 'asl' id='222'/> 

      <ul>
        {all_technology.map((technology) => {
          return (
            <button onClick={ changeSrc} key={technology.name} id={technology.name}> {technology.name}</button>

            
          )
        })}  
    </ul>
    <p> {desc}</p>
    <br></br>
    <h3> {techname}</h3>
    </div>
  )
}

export default Technology