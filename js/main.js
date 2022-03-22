// const choise = ['rock', 'paper', 'scissors'];

// function randon() {
//   return choise[Math.floor(Math.random() * choise.length)];
// }

// console.log(randon());


const elPaper = document.querySelector("#paper");
const elScissor = document.querySelector("#scissors");
const elRock = document.querySelector("#rock");
const elYour = document.querySelector("#your-score");
const elBot = document.querySelector("#bot-score");
const elBtns = document.querySelectorAll("button");
const elGroup = document.querySelector(".main");
const elPlay = document.querySelector("#play");
const elFlex = document.querySelector("#flex");
const elAgain = document.querySelector("#again");
const elWin = document.querySelector("#win");
const elLose = document.querySelector("#lose");

let yourCount = 0;
let botCount = 0;
let a = 0;

elPaper.addEventListener("click", () => {
  elGroup.style.display = "none";
  elFlex.style.display = "flex";
  let comp = Math.floor(Math.random() * elBtns.length);
  console.log(comp);
  if(comp == 0) {
    elPlay.textContent = "Draw";
  }
  else if (comp == 1) {
    elBot.textContent = botCount++;
    console.log(comp);
    elPlay.textContent = "You lose";
    if(elBot.textContent == 5){
      elPlay.textContent = "You lose";
      elLose.style.display = "flex";
      elFlex.style.display = "none";
      alert('You lose');
    }
    elAgain.addEventListener("click", () => {
      elGroup.style.display = "flex";
      elFlex.style.display = "none";
    });
  }

  else if (comp == 2) {
    elYour.textContent = yourCount++;
    console.log(comp);
    elPlay.textContent = "You Win";
    if(elYour.textContent == 5){
      elPlay.textContent = "You Win";
      elWin.style.display = "flex";
      elFlex.style.display = "none";
      alert('You win');
    }
  }
  elAgain.addEventListener("click", () => {
    elGroup.style.display = "flex";
    elFlex.style.display = "none";
  
  });
});

elScissor.addEventListener("click", () => {
  elGroup.style.display = "none";
  elFlex.style.display = "flex";
  let comp = Math.floor(Math.random() * elBtns.length);
  console.log(comp);
  if(comp == 1) {
    elPlay.textContent = "Draw";
  }
  else if (comp == 2) {
    elBot.textContent = botCount++;
    console.log(comp);
    elPlay.textContent = "You lose";
    if(elBot.textContent == 5){
      elPlay.textContent = "You lose";
      elLose.style.display = "flex";
      elFlex.style.display = "none";
      alert('You lose');
    }
    elAgain.addEventListener("click", () => {
      elGroup.style.display = "flex";
      elFlex.style.display = "none";
    
    });
  }

  else if (comp == 0) {
    elYour.textContent = yourCount++;
    console.log(comp);
    elPlay.textContent = "You Win";
    if(elYour.textContent == 5){
      elPlay.textContent = "You Win";
      elWin.style.display = "flex";
      elFlex.style.display = "none";
      alert('You win');
    }
  }
  elAgain.addEventListener("click", () => {
    elGroup.style.display = "flex";
    elFlex.style.display = "none";
  
  });
});


elRock.addEventListener("click", () => {
  elGroup.style.display = "none";
  elFlex.style.display = "flex";
  let comp = Math.floor(Math.random() * elBtns.length);
  console.log(comp);
  if(comp == 2) {
    elPlay.textContent = "Draw";
  }
  else if (comp == 0) {
    elBot.textContent = botCount++;
    console.log(comp);
    elPlay.textContent = "You lose";
    if(elBot.textContent == 5){
      elPlay.textContent = "You lose";
      elLose.style.display = "flex";
      elFlex.style.display = "none";
      alert('You lose');
    }
    elAgain.addEventListener("click", () => {
      elGroup.style.display = "flex";
      elFlex.style.display = "none";
    
    });
  }

  else if (comp == 1) {
    elYour.textContent = yourCount++;
    console.log(comp);
    elPlay.textContent = "You Win";
    if(elYour.textContent == 5){
      elPlay.textContent = "You Win";
      elWin.style.display = "flex";
      elFlex.style.display = "none";
      alert('You win');
    }
  }
  elAgain.addEventListener("click", () => {
    elGroup.style.display = "flex";
    elFlex.style.display = "none";
  });
});


