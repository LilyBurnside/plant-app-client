import React from 'react'
import QuizContext from '../../contexts/QuizContext'

export default class Results extends React.Component {
  
  static contextType = QuizContext

  render(){
    return(
      <div className="results">
        <p>results page</p>
      </div>
    )
  }
}