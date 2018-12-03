let scheduled = null;
window.addEventListener("mousemove", event => {
  if (!scheduled) {
    setTimeout(() => {
      document.body.textContent = `Mouse at ${scheduled.clientX}, ${scheduled.clientY}`;
      scheduled = null;
    }, 250);
  }
  scheduled = event;
});

const startGame = (time) => {
  let timer = window.setInterval(() => {
    if (time >= 0) {
      //example stuff to do
      let p = document.createElement("p");
      let content = document.createTextNode(time);

      p.appendChild(content);
      document.body.appendChild(p);

      time--;
    } else {
      endGame(timer);
    }
  }, 1000);
};

const endGame = (startEvent) => {
  window.clearInterval(startEvent);
};
