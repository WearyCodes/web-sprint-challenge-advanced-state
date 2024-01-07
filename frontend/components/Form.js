import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
//Sprint 7 form stuff
export function Form(props) {

  const onChange = evt => {
    const {id, value} = evt.target
    inputChange(id, value)
  }

  const onSubmit = evt => {
    const {id, value} = evt.target
    
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
