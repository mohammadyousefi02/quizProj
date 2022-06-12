import React from 'react'

interface Iprops{
    func:()=>any,
    className?:string,
    title:string
}

function MyButton({func,className="",title}:Iprops) {
    function genClassName():string{
        return `bg-[#FFAB00] rounded text-[#122433] font-bold ${className} `
    }
  return (
    <button onClick={func} className={genClassName()}>{title}</button>
  )
}

export default MyButton