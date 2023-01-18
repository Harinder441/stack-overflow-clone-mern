import React from 'react'
import './AskQuestions.css'
import {useNavigate} from 'react-router-dom'
export const AskQuestions = () => {
    
  return (

  <div className="ask-ques" >
    <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form>
            <div className="ask-form">
                <label htmlFor="title" class="ask-form-title ask-form-item ">
                <h3>Title</h3>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita.</p>
                <input type="text" name="title" id="title" placeholder='e.g ipsum dolor sit amet consectetur adipisicing eli ' />
                </label>
                <label htmlFor="body" class="ask-form-body ask-form-item  ">
                <h3>Body</h3>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita.</p>
                <textarea type="text" name="body" id="body" />
                </label>
                <label htmlFor="tags" class="ask-form-Tag ask-form-item  ">
                <h3>Tags</h3>
                <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, expedita.</p>
                <input type="text" name="tags" id="tags" placeholder='e.g ipsum dolor sit amet consectetur adipisicing eli ' />
                </label>
            </div>
        </form>
        <button type='submit' class="ask-form-btn">Review your question</button>
    </div>
  </div>
  )
}
