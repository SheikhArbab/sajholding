let character = document.querySelector('#character');
let block = document.querySelector('#block');

document.querySelector('#jumpeBtn').addEventListener('click', () => {
  character.classList.add('jumpe')
  setTimeout(() => {
    character.classList.remove('jumpe')
  }, 1000);
});
// jumpeBtn

window.addEventListener('load', () => {
  let preLoader = document.querySelector('#preLoader')
  setTimeout(() => {
    preLoader.style.height = '0'
  }, 1000);
});
// preLoader



let audioButtons = Array.from(document.querySelectorAll(".audioBtn"));
audioButtons.forEach(function (button) {
  button.addEventListener("click", () => {
    let clickSound = document.querySelector("#clickSound");
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// audioBtn


window.addEventListener('load', () => {

setTimeout(() => {
  
  
let checkDead = setInterval(() => {
  let characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  let gameOver = document.querySelector('.gameOver');
let restart = document.querySelector('#restart');

restart.addEventListener('click', () => {

setTimeout(() => {
 gameOver.style.display = 'flex'
 restart.innerHTML = 'wait...'
  location.reload()
}, 1);



})
  if (blockLeft < 60 && blockLeft > 0 && characterBottom > 220) {
    
    clickSound.play();
    gameOver.style.display = 'flex'
    clearInterval(checkDead); // Stop the interval when the condition is met
  }

}, 0);



}, 1);

});