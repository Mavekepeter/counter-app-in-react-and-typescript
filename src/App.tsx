import { useState } from "react"
import NavBar from "./components/Navbar";
import Intervers from "./components/Intervers";

function App() {
  let name:string='james'
const[count,setCount]=useState(0);
const [interval,setInterval]=useState(1)
function handleAdd(){
  
  setCount((prevCount)=>prevCount+interval)
}
function handleSub(){
 
    if(count>0){
      setCount((prevCount)=>prevCount-interval)
    }
  
  
}
function reset(){
  setCount(0),
  setInterval(1)
}

  return (
   <>
  <NavBar reset={reset}/>
   <div className="main-container">
    <h1>Counter App</h1>
    <div className="count-container">
      <span>Interval:{interval}</span>
      <h2>{count}</h2>
      
      <div>
        <button onClick={handleAdd} className="add-btn">+1</button>
        <button onClick={handleSub} className="sub-btn">-1</button>
        </div>

    </div>
  
    <Intervers setIntervals={setInterval}/>
   </div>
 
   </>
  )
}

export default App
