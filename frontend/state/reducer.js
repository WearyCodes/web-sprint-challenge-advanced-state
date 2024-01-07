// ❗ You don't need to add extra reducers to achieve MVP
// Don't mess with initial states
// Switch case for action.type matching what you want to do
import { combineReducers } from 'redux'

import { INPUT_CHANGE, RESET_FORM, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types'

// import * as types from './action-types'

const initialWheelState = 0 //Expected state is a number
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_CLOCKWISE:{
      const nextIndex = state + 1
      return nextIndex === 5 ? 0 : nextIndex}
    case MOVE_COUNTERCLOCKWISE:{
      const nextIndex = state - 1
      return nextIndex === 0 ? 5 : nextIndex}
    default:
      return state;
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type){
    case RESET_FORM:
      return {
        initialFormState
      }
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.id]: action.payload.value
      }
      default:
        return (state)
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
