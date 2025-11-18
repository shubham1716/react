import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setCounter] = useState(15);
 //let Counter =15;

  const addValue = () => {
    Counter = Counter + 1;
    setCounter(Counter);
    //console.log(Counter);
  }
  const subtractvalue = () => {
    Counter = Counter - 1;
    setCounter(Counter);
    //console.log(Counter);
  }


  return (
    <>
     <h1>Counter App</h1>
     <h2>count no: {Counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={subtractvalue}> Substract value</button>
    </>
  )
}

export default App
