class Map {
  constructor(backgroundImg, spawnLocs, time = 60, currentScore = 0, highScore = 0) {
    this.time = time;
    this.currentScore = currentScore;
    this.highScore = highScore;
    this.backgroundImg = backgroundImg;
    this.spawnLocs = spawnLocs;

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
    this.scoreDisplay.appendChild(document.createTextNode('Score: ' + this.currentScore));
    this.highScoreDisplay.appendChild(document.createTextNode('High Score: ' + this.highScore));
    this.timeDisplay.appendChild(document.createTextNode('Time Left: ' + this.time));

    this.backgroundElement.setAttribute("src", this.backgroundImg)

    this.backgroundElement.style.width = '100%';
    this.backgroundElement.style.height = '100%';

    this.backgroundContainer.style.width = '1000px';
    this.backgroundContainer.style.height = '600px';

    this.backgroundContainer.appendChild(this.backgroundElement);

    this.dataContainer.appendChild(this.scoreDisplay);
    this.dataContainer.appendChild(this.highScoreDisplay);
    this.dataContainer.appendChild(this.timeDisplay);

    document.body.appendChild(this.dataContainer);

    document.body.appendChild(this.backgroundContainer);
  }
  updateMap() {
    let dataItems = document.body.querySelector("section").querySelectorAll("p");
  }
  updateScore(points) {
    this.currentScore += points;

    this.scoreDisplay.textContent = `Score: ${this.currentScore}`;
  }
};

window.onload = () => {
  let map1 = new Map("https://defenders.org/sites/default/files/styles/homepage-feature-2015/public/northern-plains-mt-john-ruth.png?itok=L7zuWar2");
  map1.loadMap();
};

module.export = map1;
