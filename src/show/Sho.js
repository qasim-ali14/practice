import React from 'react'


 function Sho(props) {
  return (
    <div>
           <h1>hello this is {props.name}:</h1>      
    </div>
  )
}
Sho.defaultProps={
  name:'qasim',
  }
export default Sho;

