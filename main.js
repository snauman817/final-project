class Map {
  constructor(backgroundImg, spawnLocs, time = 60, currentScore = 0, highScore = 0) {
    this.time = time;
    this.currentScore = currentScore;
    this.highScore = highScore;
    this.backgroundImg = backgroundImg;
    this.spawnLocs = spawnLocs;
  }
  updateHighScore() {
    if(this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
    }
  }
  loadMap() {
    let backgroundContainer = document.createElement("section");
    let backgroundImg = document.createElement("img");

    let dataContainer = document.createElement("section");

    let scoreDisplay = document.createElement("p");
    let highScoreDisplay = document.createElement("p");
    let timeDisplay = document.createElement("p");

    scoreDisplay.appendChild(document.createTextNode('Score: ' + this.currentScore));
    highScoreDisplay.appendChild(document.createTextNode('High Score: ' + this.highScore));
    timeDisplay.appendChild(document.createTextNode('Time Left: ' + this.time));

    backgroundImg.setAttribute("src", this.backgroundImg)

    backgroundImg.style.width = '100%';
    backgroundImg.style.height = '100%';

    backgroundContainer.style.width = '1000px';
    backgroundContainer.style.height = '600px';

    backgroundContainer.appendChild(backgroundImg);

    dataContainer.appendChild(scoreDisplay);
    dataContainer.appendChild(highScoreDisplay);
    dataContainer.appendChild(timeDisplay);

    document.body.appendChild(dataContainer);

    document.body.appendChild(backgroundContainer);
  }
  updateMap() {
    let dataItems = document.body.querySelector("section").querySelectorAll("p");
  }
};

let map1 = new Map("https://defenders.org/sites/default/files/styles/homepage-feature-2015/public/northern-plains-mt-john-ruth.png?itok=L7zuWar2");
