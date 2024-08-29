import React from 'react'
const QuestionList = ({question , options , handleClick , currentAnswer , correctAnswer}) => {
    
  return (
    <div>
      <h2>{question}</h2>
      <ul>
       {options.map((option , index) =>(
        
         <li key={index} onClick={()=>handleClick(option)} class={
            currentAnswer === option && correctAnswer===option ? 'selected' : ''}>
                {option}</li>
        ))}
       
      </ul>
      {/* <h2>{correctAnswer}</h2> */}
    </div>
  )
}

export default QuestionList
