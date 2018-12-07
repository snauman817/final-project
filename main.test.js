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

// describe('Timer Tests', () => {
//   test('timer appends numbers to doc', () => {
//     expect(document.querySelectorAll('p').length).toBe(0);
//
//     startGame(2);
//
//     expect(document.querySelectorAll('p').length).toBe(3);
//   });
//   test('game ends when timer goes past 0', () => {
//
//     let map1 = addMap("https://placekitten.com/1000/600", [], 1, 200, 0);
//
//     expect(document.querySelectorAll("p").length).toBe(3);
//
//     map1.rollOverTime();
//     map1.rollOverTime();
//
//     expect(document.querySelectorAll("p").length).toBe(0);
//
//     expect(document.querySelectorAll('p').length).toBe(3);
//
//     //document.body.querySelector('section').remove();
//   });
// });
//
// describe('Map', () => {
//   test('Map is appended to the document', () => {
//     let paragraphs = document.querySelectorAll("p");
//     expect(paragraphs.length).toBe(0);
//
//     let map1 = addMap("https://placekitten.com/1000/600", [], 2, 200, 0);
//     paragraphs = document.querySelectorAll("p");
//     expect(paragraphs.length).toBe(3);
//
//     //document.body.querySelector('section').remove();
//   });
// });
// describe('Score', () => {
//   test('high score updates to current score if score is higher', () => {
//     let map1 = addMap("https://placekitten.com/1000/600", [], 1, 200, 0);
//     let paragraphs = document.querySelectorAll("p");
//     let score = paragraphs[0].textContent;
//     let highScore = paragraphs[1].textContent;
//
//     expect(score).toBe("Score: 200");
//     expect(highScore).toBe("High Score: 0");
//
//     map1.endGame();
//
//     map1.loadMap();
//
//     let nextParagraphs = document.querySelectorAll("p");
//     let newScore = nextParagraphs[0].textContent;
//     let newHighScore = nextParagraphs[1].textContent;
//
//     expect(newScore).toBe('Score: 0');
//     expect(newHighScore).toBe('High Score: 200');
//
//     //document.body.querySelector('section').remove();
//   });
// });
// describe('basicShot()', () => {
//   test('basic item disapears', () => {
//     let targetBasic = document.createElement('button');
//     document.body.appendChild(targetBasic);
//     targetBasic.style.display = "block";
//     basicShot();
//     expect(targetBasic.style.display).toBe('none');
//   });
//   test('score goes up by one', () => {
//     let score = 0;
//     basicShot();
//     expect(score).toEqual(1);
//   });
// });
