
import React from 'react';
import './App.css';
const {useState} = React;


function App() {
  const [count,setCount] = useState(0)
  return (
   
    <div className="App">
       <h1>Hello World!</h1>
       <p id="demo">You clicked me {count} times</p>

       <button onClick={()=> setCount(count + 1)}>Click me</button>
    </div>
  );
  
}

export default App;
