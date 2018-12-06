
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
class Map {
  constructor(backgroundImg, enemyList, time = 60, currentScore = 0, highScore = 0) {
    this.time = time;
    this.totalTime = this.time;
    this.currentScore = currentScore;
    this.highScore = highScore;
    this.backgroundImg = backgroundImg;
    this.enemyList = enemyList;

    this.gameWindow = document.createElement("section");

    this.backgroundContainer = document.createElement("section");
    this.backgroundElement = document.createElement("img");

    this.dataContainer = document.createElement("section");

    this.scoreDisplay = document.createElement("p");
    this.highScoreDisplay = document.createElement("p");
    this.timeDisplay = document.createElement("p");
  }
  updateHighScore() {
    if(this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
    }
  }
  loadMap() {
    this.scoreDisplay.textContent = `Score: ${this.currentScore}`;
    this.highScoreDisplay.textContent = `High Score: ${this.highScore}`;
    this.timeDisplay.textContent = `Time Left: ${this.totalTime}`;

    this.backgroundElement.setAttribute("src", this.backgroundImg)

    this.backgroundElement.style.width = '100%';
    this.backgroundElement.style.height = '100%';

    this.backgroundContainer.style.width = '1000px';
    this.backgroundContainer.style.height = '600px';

    this.backgroundContainer.appendChild(this.backgroundElement);

    this.dataContainer.appendChild(this.scoreDisplay);
    this.dataContainer.appendChild(this.highScoreDisplay);
    this.dataContainer.appendChild(this.timeDisplay);

    this.gameWindow.appendChild(this.backgroundContainer);
    this.gameWindow.appendChild(this.dataContainer);

    document.body.appendChild(this.gameWindow);
  }
  updateScore(points) {
    this.currentScore += points;

    this.scoreDisplay.textContent = `Score: ${this.currentScore}`;
  }
  rollOverTime() {
    this.time--;
    this.timeDisplay.textContent = `Time Left: ${this.time}`;

    if(this.time < 0) {
      this.endGame();
    }

    //somehow spawn the following thing
    //return this.enemyList[this.time];
  }
  endGame() {
    document.body.removeChild(this.gameWindow);

    this.updateHighScore();

    this.currentScore = 0;
    this.time = this.totalTime;
  }
};

const addMap = (url, arr, timer, score, highscore) => {
  let map1 = new Map(url, arr, timer, score, highscore);
  map1.loadMap();
  //return map1;
};

//below is all dynamic interactive functions
const createTarget = (type) => {
  if (type == "targetBasic"){
   let domType = document.createElement('img');
   domType.src = "images/targetBasic.png";
   domType.setAttribute('height', '120px');
   domType.setAttribute('width', '120px');
   document.body.appendChild(domType);
   domType.style.display = "none";
   domType.style.position = 'absolute';
   domType.addEventListener("click", () => {
     domType.src = "images/explosion1.png";
     shot.play();
     setTimeout(() => {
       domType.style.display = "none";
       domType.src = "images/targetBasic.png";
     }, 50);
     score = score + 1;
     return score;
   });
   return domType;
 }
  if (type == "targetHard"){
    let domType = document.createElement('img');
    domType.src = "images/targetHard.png";
    domType.setAttribute('height', '120px');
    domType.setAttribute('width', '120px');
    document.body.appendChild(domType);
    domType.style.display = "none";
    domType.style.position = 'absolute';
    domType.addEventListener("click", () => {
      domType.src = "images/explosion1.png";
      shot.play();
      setTimeout(() => {
        domType.style.display = "none";
        domType.src = "images/targetHard.png";
      }, 100);
      score = score + 3;
      return score;
    });
    return domType;
 }
  if (type == "targetRare"){
   let domType = document.createElement('img');
   domType.src = "images/targetRare.png";
   domType.setAttribute('height', '120px');
   domType.setAttribute('width', '120px');
   document.body.appendChild(domType);
   domType.style.display = "none";
   domType.style.position = 'relative';
   domType.addEventListener("click", () => {
     domType.src = "images/explosion1.png";
     shot.play();
     setTimeout(() => {
       domType.style.display = "none";
       domType.src = "images/targetRare.png";
     }, 100);
     score = score + 10;
     return score;
   });
   return domType;
 }
};

const tCoordinates = ["200px", "300px", "400px", "500px", "600px", "700px"];

const lCoordinates = ["200px", "300px", "400px", "500px", "600px", "700px"];


const appear = (targetType) => {
  if(targetType.style.position === "relative") {
   targetType.style.display = "block";
   targetType.style.position = "relative";
    move(targetType);
  } else {
   targetType.style.display = "block";
   targetType.style.top = tCoordinates[Math.floor(Math.random() * 5)];
   targetType.style.left = lCoordinates[Math.floor(Math.random() * 5)];
 }
};

const move = (target) => {
  let pos = 0;
  let id = setInterval(() => {
    if (pos == 800) {
      clearInterval(id);
    } else {
      pos++;
      target.style.top = pos + 'px';
      target.style.left = pos + 'px';
  }
}, 5);
};

let score = 0;

let shot = new Audio('images/awpShot2.mov');

window.onload = () => {
  addMap("https://placekitten.com/1000/600", [], 2, 200, 0);
  startGame(2);
};

module.exports = {
 basicShot,
 hardShot,
 rareShot,
 addMap,
 startGame,
 endGame,
};
