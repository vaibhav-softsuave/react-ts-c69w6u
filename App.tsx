import * as React from 'react';
import './style.css';

export default function App() {
  const [i,setI] = React.useState(0)
  function count(i){
     setI(i+1)
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={()=>count(i)}  >click me! {i}</button>
    </div>
  );
}
