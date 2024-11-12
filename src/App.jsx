import React from 'react'
import './App.css'
import Mode from './Components/Mode/Mode'
import Counter from './Components/Counter/Counter'
import { useStateValue } from './context'

function App() {
  const [state, dispatch] = useStateValue()
  return (
    <div className={`w-full h-screen ${state.theme ? "bg-white" : "bg-[#1E293B]"}`}>
      <Mode/>
      <Counter/>
    </div>
  )
}

export default React.memo(App)
