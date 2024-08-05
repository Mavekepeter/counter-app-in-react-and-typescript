import { useState } from "react";

interface IntervalProps{
    setIntervals:(i:number)=>void;
}
function Interval({setIntervals}:IntervalProps){
    const [inputInterval, setInputInterval]=useState(0)
    function handlesetInterval(){
        setIntervals(inputInterval!=0?inputInterval:1)


    }

// const Intervers = () => {
  return (
    <div className="interval">
     <div className="interval-container"> 
             <h3>Set Interval</h3>
             <input type="number"
              name="interval" 
              id="interval"
              value={inputInterval}
              onChange={(e)=>setInputInterval(parseInt(e.target.value))}
              placeholder="2"/>
              <button onClick={handlesetInterval} className="">Set Interval

              </button>
       </div>
     </div>
    
  )
}

export default Interval