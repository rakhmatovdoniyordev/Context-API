import React from 'react'
import { useStateValue } from '../../context'

const Counter = () => {
    const [state, dispatch] = useStateValue()
  return (
    <div>
        <div className="container__person">
            <div className='w-full h-screen flex justify-center items-center'>
                <div className={`grid grid-cols-3 w-96 h-16 border-[1px] rounded-[16px] ${state.theme ? "border-black" : "border-white"}`}>
                    <button onClick={()=> dispatch({type: "DEC"})} className={`text-[28px] bg-[#ff2c2c] active:opacity-70 rounded-l-[16px] select-none ${state.theme ? "text-black border-r-[1px] border-r-black" : "text-white border-r-[1px] border-r-white"}`}>-</button>
                    <h3 className={` flex justify-center items-center text-[30px] select-none ${state.theme ? "text-black": "text-white"}`}>{state.count}</h3>
                    <button onClick={()=> dispatch({type: "INC"})} className={`text-[28px] bg-[#00c700] rounded-r-[16px] active:opacity-70 select-none ${state.theme ? "text-black border-l-[1px] border-l-black" : "text-white border-l-[1px] border-l-white"}`}>+</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Counter)