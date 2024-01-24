import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersData from './components/UsersData'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <> 
      
      <div className='flex flex-col items-center justify-center'>
        <h4 className='m-6 font-bold text-md underline'>Lemon Data Test</h4>
       <UsersData/>
      </div>
    </>
  )
}

export default App
