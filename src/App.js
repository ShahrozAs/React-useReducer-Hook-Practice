import React,{useState} from 'react'
import ComponentA from './ComponentA'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Count App :{count}</h3>
      <button onClick={()=>setCount(count+1)}>Increase counter</button>
      <button onClick={()=>setCount(count-1)}>decrease counter</button>
        <ComponentA/>
    </div>
  )
}

export default App