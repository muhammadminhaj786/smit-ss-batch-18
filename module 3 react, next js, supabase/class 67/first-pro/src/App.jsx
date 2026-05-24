import { useState } from 'react'
import "./App.css";

import { Dummy } from "./Dummy.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Dummy />
  )
}

export default App
