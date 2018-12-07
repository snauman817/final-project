const startGame = (map) => {
  //creates an interval called timer
  map.loadMap();
  let timer = window.setInterval(() => {
    if (map.time > 0) {
      map.rollOverTime();
    } else {
      map.endMap();
      //if the time is up, stop the timer
      window.clearInterval(timer);
    }
    //repeat interval every second
  }, 1000);
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
    if (this.currentScore > this.highScore) {
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
    this.backgroundContainer.style.height = '700px';

    this.backgroundContainer.appendChild(this.backgroundElement);

    this.dataContainer.appendChild(this.scoreDisplay);
    this.dataContainer.appendChild(this.highScoreDisplay);
    this.dataContainer.appendChild(this.timeDisplay);

    this.gameWindow.appendChild(this.backgroundContainer);
    this.gameWindow.appendChild(this.dataContainer);

    document.body.appendChild(this.gameWindow);
  }
  updateScore(givenScore) {
    this.currentScore = givenScore;

    this.scoreDisplay.textContent = `Score: ${this.currentScore}`;
  }
  rollOverTime() {
    this.time--;
    this.timeDisplay.textContent = `Time Left: ${this.time}`;

    this.updateScore(map1Score);

    this.spawnEnemy();

    if (this.time === 0) {
      for (let index of this.enemyList) {
        if (index.style.display === "block") {
          index.style.display = "none";
        }
      }
    }

    //somehow spawn the following thing
  }
  endMap() {
    document.body.removeChild(this.gameWindow);

    this.updateHighScore();

    this.currentScore = 0;
    map1Score = 0;
    this.time = this.totalTime;
  }
  spawnEnemy() {
    appear(this.enemyList[this.time]);
  }
};

const addMap = (url, arr, timer, score, highscore) => {
  let map1 = new Map(url, arr, timer, score, highscore);
  map1.loadMap();
  //return map1;
};

//below is all dynamic interactive functions
const createTarget = (type) => {

  if (type === 1) {
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
      map1Score += 1;
    });
    return domType;
  }
  if (type === 2) {
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
      map1Score += 3;
    });
    return domType;
  }
  if (type === 3) {
    let domType = document.createElement('img');
    domType.src = "images/targetRare.png";
    domType.setAttribute('height', '120px');
    domType.setAttribute('width', '120px');
    document.body.appendChild(domType);
    domType.style.display = "none";
    domType.style.position = 'absolute';
    domType.className = 'special';
    domType.addEventListener("click", () => {
      domType.src = "images/explosion1.png";
      shot.play();
      setTimeout(() => {
        domType.style.display = "none";
        domType.src = "images/targetRare.png";
      }, 100);
      map1Score += 10;
    });
    return domType;
  }
};

const tCoordinates = ["200px", "300px", "400px", "500px", "600px", "700px"];

const lCoordinates = ["200px", "300px", "400px", "500px", "600px", "700px", "800px", "890px"];


const appear = (targetType) => {
    if (targetType.className === "special") {
      targetType.style.display = "block";
      move(targetType);
    } else {
      targetType.style.display = "block";
      targetType.style.top = tCoordinates[Math.floor(Math.random() * 5)];
      targetType.style.left = lCoordinates[Math.floor(Math.random() * 7)];
    }
};

    let map1Score = 0;
    let map1 = new Map("https://bc-gb.com/wp-content/uploads/2016/10/cbble.jpg", [
      createTarget(1),
      createTarget(2),
      createTarget(1),
      createTarget(1),
      createTarget(3),
      createTarget(1),
      createTarget(2),
      createTarget(2),
      createTarget(2),
      createTarget(1),
      createTarget(1),
      createTarget(2),
      createTarget(2),
      createTarget(3),
      createTarget(2),
    ], 15);

    let map2Score = 0;
    let map2 = new Map("https://files.gamebanana.com/img/ss/maps/5809301c4a817.jpg", [
      createTarget(1),
      createTarget(2),
      createTarget(2),
      createTarget(1),
      createTarget(3),
      createTarget(2),
      createTarget(2),
      createTarget(2),
      createTarget(2),
      createTarget(3),
      createTarget(1),
      createTarget(2),
      createTarget(2),
      createTarget(3),
      createTarget(2),
      createTarget(3),
      createTarget(2),
    ], 17);

    let map3Score = 0;
    let map3 = new Map("https://vignette.wikia.nocookie.net/cswikia/images/d/df/Csgo-de-vertigo.png/revision/latest?cb=20140820125311", [
      createTarget(1),
      createTarget(1),
      createTarget(2),
      createTarget(1),
      createTarget(1),
      createTarget(2),
      createTarget(2),
      createTarget(2),
      createTarget(1),
      createTarget(1),
      createTarget(1),
      createTarget(2),
      createTarget(1),
      createTarget(3),
      createTarget(2),
      createTarget(3),
      createTarget(1),
    ], 17);

    // window.onload = () => {
    //   addMap("https://placekitten.com/1000/600", [], 2, 200, 0);
    // };
    //
    // module.exports = {
    //  basicShot,
    //  hardShot,
    //  rareShot,
    //  addMap,
    //  startGame,
    //  endGame,
    // };


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

    let shot = new Audio('images/awpShot2.mov');

    module.exports = {
      createTarget,
      addMap,
      startGame,
      appear,
    };
