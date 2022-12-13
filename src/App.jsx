import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Chat from './components/Chat'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        
        <User/>
        <Chat/>
    </div>
  )
}

export default App
