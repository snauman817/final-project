//below is all dynamic interactive functions
const createTarget = (type) => {
  if (type == "targetBasic"){
   let domType = document.createElement('button');
   domType.textContent = "one";
   document.body.appendChild(domType);
   domType.style.display = "none";
   domType.style.position = 'absolute';
   domType.addEventListener("click", () => {
     domType.style.display = "none";
     score = score + 1;
     return score;
   });
   return domType;
 }
  if (type == "targetHard"){
    let domType = document.createElement('button');
    domType.textContent = "two";
    document.body.appendChild(domType);
    domType.style.display = "none";
    domType.style.position = 'absolute';
    domType.addEventListener("click", () => {
      domType.style.display = "none";
      score = score + 3;
      return score;
    });
    return domType;
 }
  if (type == "targetRare"){
   let domType = document.createElement('button');
   domType.textContent = "three";
   document.body.appendChild(domType);
   domType.style.display = "none";
   domType.style.position = 'absolute';
   domType.addEventListener("click", () => {
     domType.style.display = "none";
     score = score + 10;
     return score;
   });
   return domType;
 }
};

const tCoordinates = ["200px", "300px", "400px", "500px", "600px", "700px"];

const lCoordinates = ["200px", "300px", "400px", "500px", "600px", "700px"];


const appear = (targetType) => {
   targetType.style.display = "block";
   targetType.style.top = tCoordinates[Math.floor(Math.random() * 5)];
   targetType.style.left = lCoordinates[Math.floor(Math.random() * 5)];
};

let score = 0;

let enemyList = [appear(targetBasic),appear(targetBasic)];

module.exports = {
 basicShot,
 hardShot,
 rareShot,
};
