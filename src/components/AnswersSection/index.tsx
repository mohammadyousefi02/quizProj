import React, { useRef } from 'react'


interface Iprops{
  answer:string,
  u_answer:string,
  setAnswerValue:(value:string)=>void
}

function AnswersSection({answer,setAnswerValue,u_answer}:Iprops):JSX.Element {
    const javab:React.LegacyRef<HTMLHeadingElement> = useRef(null)
    const genClassName=()=>{
      return `rounded text-center sm:w-4/5 w-full py-1 cursor-pointer ${answer === u_answer ? "bg-[#2C4154] text-white" : "bg-[#86C5FD] text-black"}`
    }
  return (
    <div className={genClassName()} onClick={()=>setAnswerValue(javab.current!.innerText)} >
        <h3 ref={javab}>{answer}</h3>
    </div>
  )
}

export default AnswersSection