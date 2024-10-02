import { useState } from 'react'
import CountdownTimer from './component/CountDownTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountdownTimer/> 
    </>
  )
}

export default App
