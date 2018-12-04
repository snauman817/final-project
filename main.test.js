const { Map } = require('./main');

describe('Map', () => {
  let testMap = new Map("https://placekitten.com/1000/600");
  testMap.loadMap();

  expect(document.body.querySelectorAll("p").length).toBe(3);
});
