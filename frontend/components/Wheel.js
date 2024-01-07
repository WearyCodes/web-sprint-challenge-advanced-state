import React from 'react'
import { connect } from 'react-redux'

// "Cog Active" & "B" should be represented by state
// Logic for increasing index & moving B goes in reducer.

// import { moveCounterClockwise, moveClockwise } from '../state/action-creators'

import * as actionCreators from '../state/action-creators'

// const handleMoveClockwise = () => {
//   console.log('DISPATCHING MOVECLOCKWISE')
//   moveClockwise()
// }

// const handleMoveCounterClockwise = () => {
//   console.log('DISPATCHING MOVECOUNTERCLOCKWISE')
//   moveCounterClockwise()
// }

function Wheel(props) {
  const {
    wheel,
    moveClockwise,
    moveCounterClockwise
  } = props
  return (
    <div id="wrapper">
      <div id="wheel">
        {
          [...Array(6).keys()].map(key => {
            return (
              <div className = {`cog${wheel === key ? ' active' : ''}`} key={key} style={{ "--i": key}}>
                {wheel === key ? 'B' : null}
              </div>
            )
          })
        }
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return ({
//     state
//   })
// }

export default connect(st => st, actionCreators)(Wheel)