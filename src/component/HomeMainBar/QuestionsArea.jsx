import React from 'react'
import {Link} from "react-router-dom" 
import "./HomeMainBar.css"
export const QuestionsArea = ({question}) => {
  return (
    <div className="display-ans-container">
      <div className="display-votes-ans">
        <p>{question.upVotes}</p>
        <p>votes</p>

      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      
      </div>
     <div className="display-question-details">
      <Link to={`/Questions/${question._id}`} className="question-title" >{question.questionTitle}</Link>
      <div className="display-tags-time">
        <div className="display-tags">
          {
            question.questionTags.map((tag)=>(
             <p key={tag}>{tag}</p> 
            ))
          }
        </div>
        <p className="display-time">
          asked {question.askedOn} by  {question.userPosted}
        </p>
      </div>

     </div>
    </div>
     
  )
}
