import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  
  // function changeColor(color) {
  //   setColor(color)
  // }
  return (
    <div className='w-full h-screen duration-200 bg-black' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={() => setColor('red')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' 
          style={{backgroundColor:'red'}}>Red</button>
          <button 
          onClick={() => setColor('green')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor:'green'}}>Green</button>
          <button 
          onClick={() => setColor('blue')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' 
          style={{backgroundColor:'blue'}}>Blue</button>
          <button 
          onClick={() => setColor('yellow')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' 
          style={{backgroundColor:'yellow'}}>Yellow</button>
          <button 
          onClick={() => setColor('orange')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black' 
          style={{backgroundColor:'orange'}}>Orange</button>
          <button 
          onClick={() => setColor('black')}
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-white' 
          style={{backgroundColor:'black'}}>Black</button>
        </div> 
      </div> 
    </div>
  )
}

export default App
