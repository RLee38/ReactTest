import './App.css';
import React, { useState } from 'react';

function MyButton() {
const [count,setCount] = useState(0);
  return (
    <div>
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: 'white',
          backgroundColor: 'blue',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => setCount(count + 1)}
      >
        Button has been clicked: {count} times
      </button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}
export default App;
