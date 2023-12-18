import React, { useState } from 'react'
import './App.css';
import P5Sketch from './components/p5-sketch';


function App() {
  const [userInput, setUserInput] = useState('');
  const [ellipseColor, setEllipseColor] = useState('#ff0000'); // Set initial color
  console.log(ellipseColor)

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleColorChange = (e) => {
    setEllipseColor(e.target.value);
  };

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="請輸入1~500的數字"
        value={userInput}
        onChange={handleInputChange}
      />
       <input
        type="color"
        value={ellipseColor}
        onChange={handleColorChange}
      />
      <h2>大小: {userInput}</h2>
      <h2>顏色: {ellipseColor}</h2>
      <div className='sketch'>
        <P5Sketch userInput={userInput} ellipseColor={ellipseColor} />
      </div>
    </div>
  );
}

export default App;