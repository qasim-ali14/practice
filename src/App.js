import {useEffect, useRef, useState} from 'react'

 function App() {
  const [state,setstate]=useState('qasim');
  useEffect(()=>{
    console.log("mounted");
  },[state]);
const refelement=useRef('null');//we can manipulate dom in some cse props or state not helpfull
function reset(){
  setstate('');
  refelement.current.focus();
   

}
function handleinput(){
   refelement.current.style.color='white';

}
  return (
    <div>
      <h1>qasim</h1>
      <input 
      ref={refelement}//
      type="text" 
      value={state}
      onChange={(e)=>{
          setstate(e.target.value)
       }}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={handleinput}>color change</button>
    </div>
  )
}
export default App;