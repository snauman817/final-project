const startGame = (time) => {
  //creates an interval called timer
  let timer = window.setInterval(() => {
    if (time >= 0) {
      //example stuff to do
      // {
      let p = document.createElement("p");
      let content = document.createTextNode(time);

      p.appendChild(content);
      document.body.appendChild(p);
      //}

      //decrements the time
      time--;
    } else {
      //if the time is up, run the endGame function
      endGame(timer);
    }
    //repeat interval every second
  }, 1000);
};

//send in the timer of the level as startEvent
const endGame = (startEvent) => {
  //clears the interval for the given timer
  window.clearInterval(startEvent);
};

//export module for testing purposes
module.exports = {
  startGame,
  endGame,
};
