const {basicShot, hardShot, rareShot} = require('./main');

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
