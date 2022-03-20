const choise = ['rock', 'paper', 'scissors'];

function randon() {
  return choise[Math.floor(Math.random() * choise.length)];
}

console.log(randon());