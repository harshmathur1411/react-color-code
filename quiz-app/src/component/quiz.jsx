// import { React , useState } from 'react';
// import QuestionList from './questionList';
// import quizCSS from './quiz.css'
// const Quiz = () => {
//     const questions = [
//         {
//             question : 'What is React ?',
//             options:['React Library' , 'CSS Framework' ,'React Framework' , 'Testing Tool'],
//             answer: 'React Library'
//         },
//         {
//             question : 'What is 2+2 ?',
//             options:['4' , '8' ,'22' , '1'],
//             answer: '4'
//         }
//     ]
//     const[currentquestionIndex , setcurrentquestionIndex] = useState(0);
//     const[currentAnswer , setcurrentAnswer] = useState(null);
//     const[score , setScore] = useState(0);
//     const handleClick =(option)=>{
//         setcurrentAnswer(option)
//         if(option === questions[currentquestionIndex].answer)
//         {
//             setScore(score+1);
//         }
//     }
// const handlenextQuestion = () =>{
//     setcurrentquestionIndex(currentquestionIndex + 1);
//     setcurrentAnswer(null);
// }
//   return (
//     <div>
//       <h1>Quiz</h1>
//       {currentquestionIndex<questions.length ? <div>
//         <QuestionList question ={questions[currentquestionIndex].question}
//         options={questions[currentquestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer} />
//         <button disabled={currentAnswer===null} className={currentAnswer===null ? 'button-disable' : 'button'}
//         onClick={handlenextQuestion} correctAnswer={questions[currentquestionIndex].answer}>Next Question</button>
//       </div> : <div><h2>Your total score is : {score}</h2></div>}
      
//     </div>
//   )
// }

// export default Quiz

import React, { useState, useEffect } from 'react';
import QuestionList from './questionList';
import quizCSS from './quiz.css';

const Quiz = () => {
  const questions = [
    {
      question: 'What is React?',
      options: ['React Library', 'CSS Framework', 'React Framework', 'Testing Tool'],
      answer: 'React Library',
    },
    {
      question: 'What is 2+2?',
      options: ['4', '8', '22', '1'],
      answer: '4',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10); // Timer set to 10 seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setSelectedOption(null); // Disables answering when time is up
    }
  }, [timeLeft]);

  const handleClick = (option) => {
    if (timeLeft > 0 && selectedOption === null) {
      setSelectedOption(option);
      setCurrentAnswer(option);

      if (option === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
    setSelectedOption(null);
    setTimeLeft(10); // Reset timer for the next question
  };

  return (
    <div>
      <h1>Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <div>Time left: {timeLeft} seconds</div>
          <QuestionList
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            handleClick={handleClick}
            currentAnswer={currentAnswer}
            selectedOption={selectedOption}
            correctAnswer={questions[currentQuestionIndex].answer}
          />
          <button
            disabled={currentAnswer === null}
            className={currentAnswer === null ? 'button-disable' : 'button'}
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div>
          <h2>Your total score is: {score}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;

