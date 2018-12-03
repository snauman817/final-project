let score = 0;

//below is all dynamic interactive functions
window.onload=function(){
  //selects target from html
let targetBasic = document.querySelector(".target_basic");
let targetHard = document.querySelector(".target_hard");
let targetRare = document.querySelector(".target_rare");

const basicShot = () => {
  //makes html item dissapear (button in this case)
  targetBasic.style.display = "none";
  //adds points to whatever counter is established
  score = score + 1;
  //insert animation and audio functions here
  return score;
};

const hardShot = () => {
  //makes html item dissapear (button in this case)
  targetHard.style.display = "none";
  //adds points to whatever counter is established
  score = score + 3;
  //insert animation and audio functions here
  return score;
};

const rareShot = () => {
  //makes html item dissapear (button in this case)
  targetRare.style.display = "none";
  //adds points to whatever counter is established
  score = score + 10;
  //insert animation and audio functions here
  return score;
};

targetBasic.addEventListener("click", basicShot);
targetHard.addEventListener("click", hardShot);
targetRare.addEventListener("click", rareShot);

};
