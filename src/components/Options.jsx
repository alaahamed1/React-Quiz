import React from "react";

const Options = ({question,answer,dispatch}) => {
  const hasAnswered = answer != null;
  return (
    <div>
      <div className = "options">
        {question.options.map((option,index) => (
          <button 
          onClick = {() => dispatch({type:'newAnswer',payload: index})}  
          className = {`btn btn-option ${index === answer ? "answer" : ""}
            ${hasAnswered?  index === question.correctOption ? "correct": "wrong": ""} `}
          key = {option}
          disabled= {hasAnswered}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;