
import { useState } from 'react';
function App() {
 const [ab,setcount]=useState('');//in this object count variable hold value intialixz with a zero
 //setcount is fucntion by this we can change the value of avariable 
 const sethandler=(e)=>{//basically with state we can chnage the internal data of component. 
  setcount(e.target.value);
 }  
  return (//this is jsx part in this we write internal html.and javascript.
    <div className="App">
      {/* ////example of js. */}
   <h1> enter text</h1>
      <input
       type='text'
       value={ab}
       onChange={sethandler}
       placeholder='type something'
       />
       <p>your type{ab}</p>

    </div>
  );
}

export default App;
