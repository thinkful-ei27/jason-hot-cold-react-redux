import {MAKE_GUESS, RESTART_GAME} from './actions';

const initialState = {
  guesses: [], 
  feedback: 'Make your guess!', 
  auralStatus: '', 
  correctAnswer: Math.round(Math.random() * 100) + 1 
};

export const gameReducer = (state=initialState, action) => {
  if (action.type === RESTART_GAME) {
    return Object.assign({}, state, {
      ...initialState, 
        correctAnswer: Math.round(Math.random() * 100) + 1 
      });
    }
  if (action.type === MAKE_GUESS) {
    let guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
      return Object.assign({}, state, {
        feedback: 'Please enter a valid number'
      });
    }
    const difference = Math.abs(guess - state.correctAnswer);
    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }
    return Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, guess]
    });
  }
  return state;
};
