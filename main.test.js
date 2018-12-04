let map1 = sources('./main');

describe('Map Functions', () => {
  let dataStuff = map1.dataContainer.querySelectorAll("p");
  test(dataStuff.length).toBe(3);
});
