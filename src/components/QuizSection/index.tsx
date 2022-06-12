import React, {  useRef, useState } from 'react'
import AnswersSection from '../AnswersSection'
import MyButton from '../MyButton'

interface Props{
    correct:number,
    title:string,
    answers:string[],
    chooseAnswer:(value:string)=>void,
    numberOfQuestions:string
}

function QuizSection({correct = 0,title = "tst", answers = ["one"],chooseAnswer,numberOfQuestions}:Props) {
    const [u_answer,setU_answer] = useState<string>("")
    const setAnswerValue=(value:string)=>{
        setU_answer(value)
    }
    function decode(value:string):string{
        return value.replace(/&quot;/g, '"').replace(/&#039;/g,"'").replace(/&amp;/g,'&').replace(/&gt;/g,">").replace(/&lt;/g,"<");
    }
  return (
    <div className='bg-white p-4 rounded flex flex-col w-full min-h-full '>
        <h6 className='self-end text-[#122433] font-bold'>correct awnsers {correct}/{numberOfQuestions} </h6>
        <div className='flex-1 flex flex-col gap-10'>
            <h1 className='text-center text-[#122433] sm:text-[32px] xs:text-[24px] text[18px] font-bold my-2'>{decode(title)}</h1>
            <div className='flex flex-col gap-2 justify-center items-center'>
                {answers.map(answer=>(
                    <AnswersSection key={answer} u_answer={u_answer} answer={decode(answer)} setAnswerValue={setAnswerValue}/>
                ))}
            </div>
        </div>
        <MyButton func={()=>chooseAnswer(u_answer)} className='self-end p-1 sm:w-1/3 whitespace-nowrap px-3 mt-5' title="next questions"/>
    </div>
  )
}

export default QuizSection