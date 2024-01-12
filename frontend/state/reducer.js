// ❗ You don't need to add extra reducers to achieve MVP
// Don't mess with initial states
// Switch case for action.type matching what you want to do
import { combineReducers } from 'redux'

import { INPUT_CHANGE, RESET_FORM, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE } from './action-types'

// import * as types from './action-types'

const initialWheelState = 0;

function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      const nextIndexCW = state + 1;
      return nextIndexCW === 6 ? 0 : nextIndexCW;
    case MOVE_COUNTERCLOCKWISE:
      const nextIndexCCW = state - 1;
      return nextIndexCCW === -1 ? 5 : nextIndexCCW;
    default:
      return state;
  }
}

const initialQuizState = null;

  function quiz(state = initialQuizState, action) {
    switch (action.type) {
      case SET_QUIZ_INTO_STATE:
      return action.payload
      default:
        return state;
    }
  }

const initialSelectedAnswerState = null;

function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
    console.log(action.payload)
    // Add cases as needed for selected answer-related actions
    default:
      return state;
  }
}

const initialMessageState = '';

function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE: 
    return action.payload
    // Add cases as needed for info message-related actions
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
};

function form(state = initialFormState, action) {
  switch (action.type) {
    case RESET_FORM:
      return initialFormState;
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.id]: action.payload.value,
      };
    default:
      return state;
  }
}
export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
