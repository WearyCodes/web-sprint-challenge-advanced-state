// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'

export function moveClockwise() {
  console.log('ACTION CREATOR')
  return ({type: types.MOVE_CLOCKWISE})
}

export function moveCounterClockwise() {
  console.log('ACTION CREATOR COUNTER')
  return ({type: types.MOVE_COUNTERCLOCKWISE})
}

export function selectAnswer(answer_id) { 
  return {type: types.SET_SELECTED_ANSWER, payload: {answer_id}}
}

export function setMessage(message) { 
  return {type: types.SET_INFO_MESSAGE, payload: message}
}

export function setQuiz(quiz) { 
  return { type: types.SET_QUIZ_INTO_STATE, payload: quiz}
}

export function inputChange(id, value) {
  return ({type: types.INPUT_CHANGE, payload: {id, value}})
}

export function resetForm() {
  return ({type: types.RESET_FORM})
} // No payload 

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // Fetch the next quiz
    fetch('http://localhost:9000/api/quiz/next')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch quiz. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((quiz) => {
        console.log(quiz)
        dispatch(setQuiz(quiz));
      })
      .catch((error) => {
        console.error('Error fetching quiz:', error);
        // You might dispatch an action to set an error message in the state
      });
  };
}

export function postAnswer() {
  return function (dispatch, getState) {
    const selectedAnswer = getState().selectedAnswer;
    const quizId = getState().quiz.id;

    // Post the answer
    fetch('http://localhost:9000/api/quiz/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quiz_id: quizId, answer_id: selectedAnswer }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to post answer. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        dispatch(resetForm());
        dispatch(setMessage(responseData.feedback));
        dispatch(fetchQuiz());
      })
      .catch((error) => {
        console.error('Error posting answer:', error);
        // You might dispatch an action to set an error message in the state
      });
  };
}

export function postQuiz(payload) {
  return function (dispatch) {

    const updatedPayload = {
      question_text: payload.newQuestion,
      true_answer_text: payload.newTrueAnswer,
      false_answer_text: payload.newFalseAnswer,
    };
    console.log(updatedPayload)
    // Post a new quiz
    fetch('http://localhost:9000/api/quiz/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPayload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to post quiz. Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData)
        dispatch(setMessage('woo'));
        dispatch(setQuiz(responseData))
        dispatch(resetForm());
        console.log(responseData)
      })
      .catch((error) => {
        console.error('Error posting quiz:', error);
        // You might dispatch an action to set an error message in the state
      });
  };
}