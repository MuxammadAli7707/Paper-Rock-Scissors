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
let elImg = document.querySelector('#imgflex');
let elDimg = document.querySelector('#imgdflex');
let elColor = document.querySelector("#color");
let elBotColor = document.querySelector("#bot");


let yourCount = 0;
let botCount = 0;
let a = 0;


//Random funtion yartdim

function random () {
  return Math.floor(Math.random() * 3 + 1); //bu joyda 0dan emas 1dan 3gacha sanaydi 3ni o'ziyam kiradi
}


// O'yinda kimdir yuttimi deb tekshiradigan function

function finish () {
  if(+elYour.textContent == +elBot.textContent && +elYour.textContent == 5) {
    alert('Draw');
    elYour.textContent = 0;
    elBot.textContent = 0;
  }
  else if (+elYour.textContent >= 5 || +elBot.textContent >= 5) {
    +elYour.textContent == 5 ? alert('You win') : alert('You lose');
    elYour.textContent = 0;
    elBot.textContent = 0;
  }
}

// paper bosilganda

elPaper.addEventListener('click', ()=> {
  elGroup.style.display = "none";
  elFlex.style.display = "flex";
  elImg.src = "imgs/five-paper.png";
  elColor.style.backgroundColor = "#4664f4";

  let ran = random()

  if(elPaper.value == ran) {
    elPlay.textContent = 'Draw';
    elDimg.src = "imgs/five-paper.png";
    elBotColor.style.backgroundColor = "#4664f4";
    elYour.textContent = + elYour.textContent + 1;
    elBot.textContent = + elBot.textContent + 1;
  }
  else if (ran == 2) {
    elDimg.src == "imgs/hand.png";
    elBotColor.style.backgroundColor = "#eb9f0e";
    elBot.textContent = + elBot.textContent + 1;
    elPlay.textContent = 'Your Lose';
  }
  else {
    elDimg.src = 'imgs/fist.png';
    elBotColor.style.backgroundColor = "#db2e4d";
    elYour.textContent = + elYour.textContent + 1;
    elPlay.textContent = 'Your win';
  }

  if(elYour.textContent == 5) {
    alert('You win');
    elYour.textContent = 0;
  }

});


// Hand bosilganda

elScissor.addEventListener('click', ()=> {
  elGroup.style.display = "none";
  elFlex.style.display = "flex";
  elImg.src = 'imgs/hand.png';
  elColor.style.backgroundColor = "#eb9f0e";

  let ran = random()

  if(elScissor.value == ran) {
    elPlay.textContent = 'Draw';
    elImg.src = 'imgs/hand.png';
    elBotColor.style.backgroundColor = "#eb9f0e";
    elYour.textContent = + elYour.textContent + 1;
    elBot.textContent = + elBot.textContent + 1;
  }
  else if (ran == 1) {
    elDimg.src == "imgs/five-paper.png";
    elBotColor.style.backgroundColor = "#4664f4";
    elYour.textContent = + elYour.textContent + 1;
    elPlay.textContent = 'Your win';
  }
  else {
    elDimg.src = 'imgs/fist.png';
    elBot.textContent = + elBot.textContent + 1;
    elPlay.textContent = 'Your lose';
    elBotColor.style.backgroundColor = "#db2e4d";
  }
});

// rock bosilganda

elRock.addEventListener('click', ()=> {
  elGroup.style.display = "none";
  elFlex.style.display = "flex";
  elImg.src = 'imgs/fist.png';
  elColor.style.backgroundColor = "#db2e4d";

  let ran = random();

  if(ran == elRock.value) {
    elPlay.textContent = 'Draw';
    elDimg.src = 'imgs/fist.png';
    elBotColor.style.backgroundColor = "#db2e4d";
    elYour.textContent = +elYour.textContent + 1;
    elBot.textContent = +elBot.textContent + 1;
  }
  else if (ran == 1) {
    elDimg.src = "imgs/five-paper.png";
    elBotColor.style.backgroundColor = "#4664f4";
    elBot.textContent = +elBot.textContent + 1;
    elPlay.textContent = 'You Lose';
  }
  else {
    elDimg.src = 'imgs/hand.png';
    elBotColor.style.backgroundColor = "#eb9f0e";
    elYour.textContent = +elYour.textContent + 1;
    elPlay.textContent = 'You win'
  }
});

// davom etirish

elAgain.onclick = function() {
  // kim yuti tekshiradi
  finish()
  elPlay.textContent = 'Play';

  // 1chi bolim ochiladi

  elGroup.style.display = "flex";

  // 2chi bolim yopiladi
  elFlex.style.display = "none";
}



// elPaper.addEventListener("click", () => {
//   elGroup.style.display = "none";
//   elFlex.style.display = "flex";
//   let comp = Math.floor(Math.random() * elBtns.length);
//   console.log(comp);

//   if(comp == 0) {
//     elPlay.textContent = "Draw";
//   }
//   else if (comp == 1) {
//     elBot.textContent = botCount++;
//     console.log(comp);
//     elPlay.textContent = "You lose";
//     if(elBot.textContent == 5){
//       elPlay.textContent = "You lose";
//       elLose.style.display = "flex";
//       elFlex.style.display = "none";
//       alert('You lose');
//     }
//     elAgain.addEventListener("click", () => {
//       elGroup.style.display = "flex";
//       elFlex.style.display = "none";
//     });
//   }

//   else if (comp == 2) {
//     elYour.textContent = yourCount++;
//     console.log(comp);
//     elPlay.textContent = "You Win";
//     if(elYour.textContent == 5){
//       elPlay.textContent = "You Win";
//       elWin.style.display = "flex";
//       elFlex.style.display = "none";
//       alert('You win');
//     }
//   }
//   elAgain.addEventListener("click", () => {
//     elGroup.style.display = "flex";
//     elFlex.style.display = "none";

//   });
// });

// elScissor.addEventListener("click", () => {
//   elGroup.style.display = "none";
//   elFlex.style.display = "flex";
//   let comp = Math.floor(Math.random() * elBtns.length);
//   console.log(comp);
//   if(comp == 1) {
//     elPlay.textContent = "Draw";
//   }
//   else if (comp == 2) {
//     elBot.textContent = botCount++;
//     console.log(comp);
//     elPlay.textContent = "You lose";
//     if(elBot.textContent == 5){
//       elPlay.textContent = "You lose";
//       elLose.style.display = "flex";
//       elFlex.style.display = "none";
//       alert('You lose');
//     }
//     elAgain.addEventListener("click", () => {
//       elGroup.style.display = "flex";
//       elFlex.style.display = "none";

//     });
//   }

//   else if (comp == 0) {
//     elYour.textContent = yourCount++;
//     console.log(comp);
//     elPlay.textContent = "You Win";
//     if(elYour.textContent == 5){
//       elPlay.textContent = "You Win";
//       elWin.style.display = "flex";
//       elFlex.style.display = "none";
//       alert('You win');
//     }
//   }
//   elAgain.addEventListener("click", () => {
//     elGroup.style.display = "flex";
//     elFlex.style.display = "none";

//   });
// });


// elRock.addEventListener("click", () => {
//   elGroup.style.display = "none";
//   elFlex.style.display = "flex";
//   let comp = Math.floor(Math.random() * elBtns.length);
//   console.log(comp);
//   if(comp == 2) {
//     elPlay.textContent = "Draw";
//   }
//   else if (comp == 0) {
//     elBot.textContent = botCount++;
//     console.log(comp);
//     elPlay.textContent = "You lose";
//     if(elBot.textContent == 5){
//       elPlay.textContent = "You lose";
//       elLose.style.display = "flex";
//       elFlex.style.display = "none";
//       alert('You lose');
//     }
//     elAgain.addEventListener("click", () => {
//       elGroup.style.display = "flex";
//       elFlex.style.display = "none";

//     });
//   }

//   else if (comp == 1) {
//     elYour.textContent = yourCount++;
//     console.log(comp);
//     elPlay.textContent = "You Win";
//     if(elYour.textContent == 5){
//       elPlay.textContent = "You Win";
//       elWin.style.display = "flex";
//       elFlex.style.display = "none";
//       alert('You win');
//     }
//   }
//   elAgain.addEventListener("click", () => {
//     elGroup.style.display = "flex";
//     elFlex.style.display = "none";
//   });
// });