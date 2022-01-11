
import './App.css';

function App() {
  return (
    <div className="App">
      <form onsubmit="ApiRequest()" className="bar">
        <p className="zip">Zip Code: </p>
        <input type="text" id="inpt" placeholder="Try 10016"/> 
      </form>
      <p>No Results</p>
    </div>
  );
}

export default App;
