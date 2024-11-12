import React from 'react'
import { MdDarkMode, MdLightMode  } from "react-icons/md";
import { useStateValue } from '../../context';

const Mode = () => {
    const [state, dispatch] = useStateValue()
  return (
    <div>
        <div className="container__person">
            <div className={`fixed right-[40px] bottom-[40px]  w-[60px] h-[60px] flex items-center justify-center ${state.theme ? "border-[1px] border-black rounded-[50%]": "border-[1px] border-white rounded-[50%]"}`}>
                {
                state.theme ? <MdDarkMode onClick={()=> dispatch({type: "DIS"})} className='text-black text-[40px] cursor-pointer'/> : <MdLightMode onClick={()=> dispatch({type: "DIS"})} className='text-white text-[40px] cursor-pointer'/>
                }
            </div>
        </div>
    </div>
  )
}

export default React.memo(Mode)