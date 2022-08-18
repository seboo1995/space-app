import { React, useState, useEffect, useRef } from "react";
import "./Technology.css";
import myData from "../../assets/data.json";

const Technology = () => {
  const all_technologies = myData.technology;
  const [techID, setTechID] = useState(0);
  const technology_ref = useRef();

  useEffect(
    function () {
      const intervalRef = setInterval(function () {
        let nextIndex = (techID + 1) % all_technologies.length;
        changeSrc(nextIndex);
      }, 2000);

      return () => clearInterval(intervalRef);
    },
    [techID]
  );

  useEffect(() => {
    document.body.classList.add("technology-container");

    return () => {
      document.body.classList.remove("technology-container");
    };
  });

  function changeSrc(index) {
    setTechID(index);
    for (const btn of technology_ref.current.children) {
      btn.style.background = "transparent";
      btn.style.color = "#fff";
    }
    technology_ref.current.children[index].style.background = "#fff";
    technology_ref.current.children[index].style.color = "black";
  }
  return (
    <div className="grid-container">
      {/* First Row  */}
      <div className="title-tab-tech">
        <h2>
          {" "}
          <p> 03 </p> SPACE LAUNCH 101{" "}
        </h2>
      </div>
      {/* Second Row */}
      <div className="image-tab-tech">
        <img
          src={all_technologies[techID].images.portrait}
          alt="asl"
          id="222"
        />
      </div>
      {/* Third row */}
      <div className="number-button-tech">
        <ul ref={technology_ref}>
          {all_technologies.map((tech, index) => {
            return (
              <button
                onClick={() => changeSrc(index)}
                key={tech.name}
                id={tech.name}
              >
                {" "}
                {index + 1}
              </button>
            );
          })}
        </ul>
      </div>

      <div className="description-tab-tech">
        <h4>The Terminology</h4>
        <h3> {all_technologies[techID].name}</h3>
        <br></br>
        
      </div>
      <div className='desc-tech'>
        <p> {all_technologies[techID].description}</p>
        </div>
    </div>
  );
};

export default Technology;
