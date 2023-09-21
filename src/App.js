import './App.css';
import { useState,useMemo ,useCallback} from 'react';
import Child from './Child';


function App() {

  const [add, setAdd] = useState(0);
  const [min, setMin] = useState(99);

  const incrementAdd = useCallback(()=>{
    setAdd(add + 1);

  },[add])

  
 
  const decrementMin = () => {
    setMin(min - 1);
  };
 

  return (
    <div className="App">
      <header className="App-header">
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
