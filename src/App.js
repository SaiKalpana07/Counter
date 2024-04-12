import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import FirstCompo from './Components/FirstCompo';


function App() {
  const [count,setCount] = useState(0);

  const handleClick = () => {
   setCount(count+2);
  }
  return (
   <>
   <p>Welcome React!</p>
   <p>I clicked the button {count} times</p>
   <button onClick={handleClick}>Check</button>
   <FirstCompo></FirstCompo>
   </>
  );
}

export default App;
