import React, { ChangeEvent,  useEffect, useState } from 'react'

import SelectInput from '../SelectInput'

import {Ioption} from "../../interfaces/QuizInterfaces"

import { useNavigate } from 'react-router-dom'
import MyButton from '../MyButton'



function SetupQuiz():JSX.Element {
    const navigate = useNavigate()

    const [numberOfQuestions,setNumberOfQuestions] = useState("10")
    const [categories,setCategories] = useState<Ioption[]>([])
    const [category,setCategory] = useState<string>('any')
    const [difficulty,setDifficulty] = useState<string>('any')
    const [error,setError] = useState('')

    const [difficulties,setDifficulties] = useState<Ioption[]>([
        {id:'1',title:'any difficulty',value:'any'},
        {id:'2',title:'easy',value:'easy'},
        {id:'3',title:'medium',value:'medium'},
        {id:'4',title:'hard',value:'hard'},
    ])

    useEffect(()=>{
        getCategories()
    },[])

    async function getCategories(){
        const response = await fetch('https://opentdb.com/api_category.php')
        const data = await response.json()
        const copyCategories:Ioption[] = []
        copyCategories.push({id:"00",title:'any categories',value:'any'})
        data.trivia_categories.forEach((category:{id:string,name:string})=>{
            copyCategories.push({id:category.id,title:category.name,value:category.id})
        })
        setCategories(copyCategories)
    }

    function getApiUrl():string{
        const q_category = category === 'any' ? '' : `&category=${category}`
        const q_difficulty = difficulty === 'any' ? '' : `&difficulty=${difficulty}`
        return `https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple${q_category}${q_difficulty}`
    }

    async function startQuiz(){
       if(+numberOfQuestions > 0 && +numberOfQuestions<50){
        const response = await fetch(getApiUrl())
        const data = await response.json()
        const questions = data.results
        navigate('/quiz',{state:{questions,numberOfQuestions}})
       }else{
        setError('the number of questions must be 1 to 50')
       }
    }    

  return (
    <div className='px-10'>
        <div className="bg-white rounded-2xl sm:w-96 xs:w-80 w-64 p-8 flex flex-col gap-5">
            <h1 className='text-[#122433] text-3xl font-bold'>Setup Quiz</h1>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Number Of Questions</label>
                <input type="text" className='bg-[#F1F4FD] p-1' value={numberOfQuestions} onChange={(e:ChangeEvent<HTMLInputElement>)=>setNumberOfQuestions(e.target.value)}  />
            </div>
            <SelectInput name='Category' optionList={categories} value={category}  onChange={(e:ChangeEvent<HTMLSelectElement>)=>setCategory(e.target.value)}/>
            <SelectInput name='difficulty' optionList={difficulties} value={difficulty}  onChange={(e:ChangeEvent<HTMLSelectElement>)=>setDifficulty(e.target.value)}/>
            <MyButton func={startQuiz} title="Start"/>
            {error}
        </div>
    </div>
  )
}

export default SetupQuiz