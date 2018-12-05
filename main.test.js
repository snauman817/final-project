const { startGame, endGame } = require('./main');

describe('Timer Tests', () => {
  test('timer appends numbers to doc', () => {
    expect(document.querySelectorAll('p').length).toBe(0);

    startGame(2);

    expect(document.querySelectorAll('p').length).toBe(3);
  });
});
