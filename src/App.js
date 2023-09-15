
import { useState } from 'react';
import Sho from './show/Sho'
function App() {
 const [ab,setcount]=useState(0);//in this object count variable hold value intialixz with a zero
 //setcount is fucntion by this we can change the value of avariable 
 function increment(){//basically with state we can chnage the internal data of component. 
  setcount(ab+1);
 }  
  return (//this is jsx part in this we write internal html.and js.
    <div className="App">
   <h1> your are no {ab}</h1>
      <Sho />
      <Sho name='ahmed'/>
      <Sho name='ali'/>
      <button onClick={increment}>increment </button>
    </div>
  );
}

export default App;
