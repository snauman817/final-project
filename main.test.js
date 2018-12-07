const {
  createTarget,
  addMap,
  startGame,
  appear,
} = require('./main');

describe('Target Tests', () => {
  //targets get appended to the DOM with createTarget()
  test('appends a basic target to the DOM', () => {
    let itemsLength = document.querySelectorAll('img').length;

    let target = createTarget(1);

    expect(target.getAttribute('src')).toBe("images/targetBasic.png");
    expect(document.querySelectorAll('img').length > itemsLength).toBe(true);
  });

  //targets appear on screen with appear()
  test('Targets appear on the window when appear() is called', () => {
    let newTarget = createTarget(2);

    expect(newTarget.style.display).toBe('none');

    appear(newTarget);
    expect(newTarget.style.display).toBe('block');
  });
});

describe('Map tests', () => {
  //map is successfully added to DOM
  test('Map is successfully added to DOM', () => {
    let itemsLength = document.querySelectorAll('section').length;
    let newMap = addMap("whatever.jpg", [], 10);

    expect(document.querySelectorAll('section').length > itemsLength).toBe(true);
  });

  //map is successfully removed from window
  test('Map successfully removed from DOM when endMap() is called', () => {
    let itemsLength = document.querySelectorAll('section').length;
    let newMap = addMap("whatever.jpg", [], 10);

    expect(document.querySelectorAll('section').length > itemsLength).toBe(true);

    newMap.endMap();
    expect(document.querySelectorAll('section').length > itemsLength).toBe(false);
  });

  //map's high score updates when the game ends
  test("Map's high score updates when the game ends", () => {
    let newMap = addMap("whatever.jpg", [], 10);
    expect(newMap.currentScore).toBe(0);
    expect(newMap.highScore === newMap.currentScore).toBe(true);

    newMap.updateScore(10);
    expect(newMap.currentScore).toBe(10);

    newMap.endMap();
    expect(newMap.highScore).toBe(10);
  });

  //map's time goes down when rollOverTime is called
  test("map's time goes down when rollOverTime() is called", () => {
    let newMap = addMap("whatever.jpg", [
      createTarget(1),
      createTarget(2),
      createTarget(1),
      createTarget(1),
    ], 2);
    expect(newMap.time).toBe(2);

    newMap.rollOverTime();

    expect(newMap.time).toBe(1);
  });
});
