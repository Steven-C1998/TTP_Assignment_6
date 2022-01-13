import react, { useEffect, useState } from 'react'
import './App.css';
import TestFetch from './testFetch'

function App() {
  const [code, setCode] = useState("")
  function handleZipCode(event) {

    setCode(event.target.value.toUpperCase())
  }
  return (

    <div className="App">
      <div className="press">
        <p className="zip">City Name: </p>
        <input type="text" id="inpt" name="inpt" placeholder="Try Chicago" onChange={handleZipCode}></input>
        {console.log(code)}
      </div>
      <TestFetch zap={code} />
      
    </div>

  );
}

export default App;
