import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
//Sprint 7 form stuff
export function Form(props) {
  const { inputChange, resetForm, postQuiz, form } = props;

  const onChange = (evt) => {
    const { id, value } = evt.target;
    inputChange(id, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    postQuiz(form);
    // Optionally, you can reset the form after submission
    resetForm();
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" value={form.newQuestion} placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" value={form.newTrueAnswer} placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" value={form.newFalseAnswer} placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" type="submit" disabled = {(form.newQuestion.trim().length && form.newTrueAnswer.trim().length && form.newFalseAnswer.trim().length) > 1 ? false : true}>
        Submit new quiz
      </button>
    </form>
  );
}

export default connect(st => st, actionCreators)(Form)
