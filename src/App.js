import './App.css';
import { useState,useMemo } from 'react';
import Child from './Child';


function App() {

  const [add, setAdd] = useState(0);
  const [min, setMin] = useState(99);

  const incrementAdd = () => {
    setAdd(add + 1);
  };

  const multi = useMemo(()=>
  {
    console.log('mutli runs')
    return add*10;
  },[add])

  const decrementMin = () => {
    setMin(min - 1);
  };
 

  
  

  return (
    <div className="App">
      <header className="App-header">
      <p>{multi}</p>
        <p>{add}</p>
        {/* <button onClick={incrementAdd}>Add</button> */}
        <p>{min}</p>
        <button onClick={decrementMin}>Min</button>

       <Child incrementAdd={incrementAdd }/>
      </header>

    </div>
  );
}

export default App;
