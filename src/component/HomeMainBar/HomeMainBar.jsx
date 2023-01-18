import React from 'react'
import "./HomeMainBar.css"
import { QuestionsArea } from './QuestionsArea'
import {Link ,useLocation,useNavigate} from "react-router-dom"
export const HomeMainBar = () => {

    var questionsList = [{ 
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "mano",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'kumar',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }];
    const location= useLocation(); 
    const Qlist=(question)=>(
        <QuestionsArea question={question} key={question._id}/>
    )
    const user=1;
    const History=useNavigate() ;
    const redirect=()=>{
        if(user===null)
        {alert("Login or signup first")
        History("/Auth")}
        else{
            History("/askQuestions") 
        }
    }
   
    return (

<div className="main-bar">
   <div className="main-bar-header">
    {
        location.pathname==='/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
    }    
   <button  className='ask-btn' onClick={redirect}>Ask Question</button>
   </div>
   <div className='main-bar-body'>
    {
       questionsList==null ? <h1>Loading....</h1>:
       <>
       <p>{questionsList.length} questions</p>
        {questionsList.map(Qlist)}
     
       </> 
    }
   </div>
</div>
  )
}
