import React from 'react'
import {Link, useParams } from 'react-router-dom';
import downvote from '../../assets/sort-down.svg'
import upvote from '../../assets/sort-up.svg'
import { Avatar } from '../../component/Avatar/Avatar';
import "./DisplayQuestion.css"
export const QuestionsDetail = () => {
     const {id}=useParams();
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
            answerBody: "Answer1",
            userAnswered: 'kumar1',
            answeredOn: "jan 2",
            userId: 2,
        },
        {
            answerBody: "Answer2",
            userAnswered: 'Bimar',
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
    return (
    <div className="ques-detail-page" >
     {
       questionsList==null ? <h1>Loading....</h1>:
       <>
        {
            
            questionsList.filter(question=> question._id==id).map(question=>(
                <div key={question.id}>
                   <section className='ques-details-container'>
                     <h1>{question.questionTitle}</h1>
                     <div className='ques-details-container-2'>
                        <div className="ques-votes">
                            <img src={upvote} alt="" width="18px"/>
                            <p >{question.upVotes-question.downVotes}</p>
                            <img src={downvote} alt="" width="18px"/>
                        </div>
                        <div className="body">
                            <div className="body-text">
                                    {question.questionBody}
                            </div>
                            <div className="body-tags">
                                {question.questionTags.map(tags=>(
                                    <p>{tags}</p>
                                ))}
                            </div>
                            <div className="body-btn-info">
                                <div className="body-btn">
    
                                   <button>share</button>
                                   <button>Delete</button>
                                </div>
                                <div className="body-info">
                                    <p>asked {question.askedOn}</p>
                                    <Link to={`/user/${question.userId}`}> <div><Avatar usr={question.userPosted.charAt(0).toUpperCase()} bgc="#009dff" px="10px" py="7px" bR="0" color="white"> </Avatar> 
                                    <p>{question.userPosted}</p>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                     </div>
                   </section>
                    <section className='ans-details-container'>
                        <h3>{question.answer.length} Answer{question.answer.length>1 ?<>s</>:<></>}</h3>
                        <div className='ans-details-container-2'>
                        {question.answer.map(ans=>(
                        <div className="body">
                            <div className="body-text">
                            {ans.answerBody}
                            </div>
                           
                            <div className="body-btn-info">
                                <div className="body-btn">
    
                                   <button>share</button>
                                   
                                </div>
                                <div className="body-info">
                                    <p>answered {ans.answeredOn}</p>
                                    <Link to={`/user/${ans.userId}`}> <div><Avatar usr={ans.userAnswered.charAt(0).toUpperCase()} bgc="#009dff" px="10px" py="7px" bR="0" color="white"> </Avatar> 
                                    <p>{ans.userAnswered}</p>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                        </div>

                    </section>
                    <section className='your-ans-container'>
                     <h3>Your Answer</h3>
                     <form >
                     <textarea></textarea>
                     <input type="submit" value='Post your answer' />
                     </form>
                  
                    </section>
                <div className='browse'>
                    Browse questions tagged  {question.questionTags.map(tags=>(
                                    <p>{tags}</p>
                                ))} 
                  <Link to="/askQuestions"> or ask you own question</Link>
                </div>
                </div>
            ))
        }
     
       </> 
    }
    </div>
  )
}
