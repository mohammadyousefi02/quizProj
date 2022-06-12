import React from 'react'

import {Ioption} from "../../interfaces/QuizInterfaces"

interface Iprops {
    name:string,
    optionList:Ioption[],
    [key:string]:any
}

function SelectInput({name,optionList,...other}:Iprops):JSX.Element {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor={name}>{name}</label>
        <select name={name} id={name} {...other} className='bg-[#F1F4FD] p-1 cursor-pointer'>
            {optionList.map((option:Ioption)=>(
                <option key={option.id} value={option.value}>{option.title}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectInput