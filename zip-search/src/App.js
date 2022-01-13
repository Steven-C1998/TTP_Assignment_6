import react, { useEffect, useState } from 'react'
import './App.css';
import TestFetch from './testFetch'

function App() {
  const [code, setCode] = useState("")
  function handleZipCode(event) {
    setCode(event.target.value)
  }
  return (

    <div className="App">
      <div className="press">
        <p className="zip">Zip Code: </p>
        <input type="text" id="inpt" name="inpt" placeholder="Try 10016" onChange={handleZipCode}></input>
      </div>
      <TestFetch zap={code} />
    </div>

  );
}

export default App;
