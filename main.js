//below is all dynamic interactive functions
//selects target from html

const basicShot = () => {
  targetBasic.style.display = "none";
  score = score + 1;
  return score;
};

const hardShot = () => {
  targetHard.style.display = "none";
  score = score + 3;
  return score;
};

const rareShot = () => {
  targetRare.style.display = "none";
  score = score + 10;
  return score;
};

const test = () => {
  if (interval > 0){
  setInterval(appear(), 250);
  return interval -= 1;
  }
};

const appear = (targetType) => {
   targetType.style.display = "block";
   targetType.style.top = tCoordinates[Math.floor(Math.random() * 5)];
   targetType.style.left = lCoordinates[Math.floor(Math.random() * 5)];
};


let targetBasic = document.createElement('button');
let targetHard = document.createElement('button');
let targetRare = document.createElement('button');
targetBasic.textContent = "one";
targetHard.textContent = "two";
targetRare.textContent = "three";
document.body.appendChild(targetBasic);
document.body.appendChild(targetHard);
document.body.appendChild(targetRare);

targetBasic.addEventListener("click", basicShot);
targetHard.addEventListener("click", hardShot);
targetRare.addEventListener("click", rareShot);

targetBasic.style.display = "none";
targetHard.style.display = "none";
targetRare.style.display = "none";
targetBasic.style.position = 'absolute';
targetHard.style.position = 'absolute';
targetRare.style.position = 'absolute';

let score = 0;

const types = [targetBasic, targetHard, targetRare];

let enemyList = [appear(targetBasic),appear(targetBasic)];

const tCoordinates = ["200px", "300px", "400px", "500px", "600px", "700px"];

const lCoordinates = ["200px", "300px", "400px", "500px", "600px", "700px"];


module.exports = {
 test,
 basicShot,
 hardShot,
 rareShot,
 tCoordinates,
 targetBasic,
};
