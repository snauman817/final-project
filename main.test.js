const { addMap, basicShot, hardShot, rareShot } = require('./main');

describe('Map', () => {
  test('Map is appended to the document', () => {
    let paragraphs = document.querySelectorAll("p");
    expect(paragraphs.length).toBe(0);

    let map1 = addMap("https://placekitten.com/1000/600", [], 2, 200, 0);
    paragraphs = document.querySelectorAll("p");
    expect(paragraphs.length).toBe(3);

    //document.body.querySelector('section').remove();
  });

  test('high score updates to current score if score is higher', () => {
    let map1 = addMap("https://placekitten.com/1000/600", [], 1, 200, 0);
    let paragraphs = document.querySelectorAll("p");
    let score = paragraphs[0].textContent;
    let highScore = paragraphs[1].textContent;

    expect(score).toBe("Score: 200");
    expect(highScore).toBe("High Score: 0");

    map1.endGame();

    map1.loadMap();

    let nextParagraphs = document.querySelectorAll("p");
    let newScore = nextParagraphs[0].textContent;
    let newHighScore = nextParagraphs[1].textContent;

    expect(newScore).toBe('Score: 0');
    expect(newHighScore).toBe('High Score: 200');

    //document.body.querySelector('section').remove();
  });

  test('game ends when timer goes past 0', () => {

    let map1 = addMap("https://placekitten.com/1000/600", [], 1, 200, 0);

    expect(document.querySelectorAll("p").length).toBe(3);

    map1.rollOverTime();
    map1.rollOverTime();

    expect(document.querySelectorAll("p").length).toBe(0);

    expect(document.querySelectorAll('p').length).toBe(3);

    //document.body.querySelector('section').remove();
  });

describe('basicShot()', () => {
  test('basic item disapears', () => {
    let targetBasic = document.createElement('button');
    document.body.appendChild(targetBasic);
    targetBasic.style.display = "block";
    basicShot();
    expect(targetBasic.style.display).toBe('none');
});
  test('score goes up by one', () => {
    let score = 0;
    basicShot();
    expect(score).toEqual(1);
});
});
