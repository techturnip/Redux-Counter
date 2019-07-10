import { INCREMENT, DECREMENT } from '../actions'

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case INCREMENT:
      const increasedCount = action.payload + 1
      return {
        ...state,
        count: increasedCount
      }
    case DECREMENT:
      let decreasedCount = action.payload
      if (action.payload > 0) {
        decreasedCount = action.payload - 1
      } else {
        decreasedCount = 0
      }
      return {
        ...state,
        count: decreasedCount
      }
    default:
      return state
  }
}
