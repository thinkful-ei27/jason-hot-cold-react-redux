export const RESTART_GAME = 'RESTART_GAME';
export const restart_game = () => ({
  type: RESTART_GAME
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const make_guess = (guess) => ({
  type: MAKE_GUESS,
  guess
});
