import React from 'react'
import {useNavigate} from "react-router-dom"
import MyButton from '../MyButton'

interface Props {
    answer:number,
}


function ShowResultModal({answer}:Props) {
    const navigate = useNavigate()
    const resetGame = () => {
      navigate("/")
    }
  return (
    <div className='w-full h-full bg-black bg-opacity-20 absolute -top-0 flex items-center justify-center px-2'>
        <div className='bg-white rounded text-center px-10 py-5 w-80 flex flex-col gap-3 text-[#122433] font-bold'>
            <h1>Congrats</h1>
            <h6>you answered {answer}%</h6>
            <MyButton func={resetGame} className='p-1' title='Play Again'/>
        </div>
    </div>
  )
}

export default ShowResultModal