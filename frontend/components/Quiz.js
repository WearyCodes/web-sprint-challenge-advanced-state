import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';



function Quiz(props) {
  const { quiz, selectAnswer, postAnswer, resetForm, fetchQuiz, selectedAnswer, postQuiz } = props;

    useEffect(() => {
    console.log(props)
  }, [])

  useEffect(() => {
    fetchQuiz()
  }, [])

  const handleAnswerSelect = (answerId) => {
    selectAnswer(answerId);
  };

  const handleAnswerSubmit = () => {
    // Assuming you have the selected answer in your state
    postAnswer(selectedAnswer)
      // Fetch the next quiz after posting the answer
        fetchQuiz()
      ; // Use the action directly without props
  };

  return (
    <div id="wrapper">
      {quiz ? (
        <>
          <h2>{quiz.question}</h2>

          <div id="quizAnswers">
            {quiz.answers.map((answer) => (
              <div
                key={answer.answer_id}
                className={`answer ${answer.answer_id === props.selectedAnswer ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(answer.answer_id)}
              >
                {answer.text}
                <button>{answer.answer_id === props.selectedAnswer ? "SELECTED" : 'select'}</button>
              </div>
            ))}
          </div>

          <button id="submitAnswerBtn" onClick={handleAnswerSubmit} disabled = {!selectedAnswer ? true : false}>
            Submit answer
          </button>
        </>
      ) : (
        'Loading next quiz...'
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  quiz: state.quiz,
  selectedAnswer: state.selectedAnswer,
});

export default connect(mapStateToProps, actionCreators)(Quiz);