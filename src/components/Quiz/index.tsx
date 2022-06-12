import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
import QuizSection from '../QuizSection'
import ShowResultModal from '../ShowResultModal'

function Quiz() {
    const [questions,setQuestions] = useState<any>([])
    const [question,setQuestion] = useState<any>(0)
    const [correct,setCorrect] = useState(0)
    const [showResult,setShowResult] = useState(false)
    const [numberOfQuestions,setNumberOfQuestions] = useState("0")
    const location =  useLocation()
    const {state}:any = location;
    useEffect(()=>{
            setQuestions(state.questions)
            setQuestion(0)
            setNumberOfQuestions(state.numberOfQuestions)
    },[])

    const chooseAnswer=(answer:string)=>{
        const questionObj = questions[question + 1];
        if(answer === questions[question].correct_answer){
            setCorrect(correct+1)
        }
        questionObj ? setQuestion(question + 1) : setShowResult(true)
    }
  return (
    <>
        <div className='w-full h-full px-8 sm:px-20 py-12'>
          <QuizSection correct={correct} answers={questions[question]?.incorrect_answers?.concat(questions[question]?.correct_answer).sort()} title={questions[question]?.question} chooseAnswer={chooseAnswer} numberOfQuestions={numberOfQuestions}/>
        </div>
          {showResult && <ShowResultModal answer={(correct/(+numberOfQuestions)) * 100}/>}
    </>
  )
}

export default Quiz