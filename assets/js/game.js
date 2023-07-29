window.addEventListener('load', () => {
  let preLoader = document.querySelector('#preLoader');
  let bgSound = document.querySelector("#bgSound");
  bgSound.currentTime = 0;

  setTimeout(() => {
    preLoader.style.height = '0';
    
    let updateElementValue = (sv) => {
      let score = document.querySelector('#score');
      score.innerHTML = sv;
    
      if (sv < 9999999) {
        setTimeout(() => {
          bgSound.play();
          updateElementValue(sv + 1);
        }, 1000);
      }
    }



    
    
    updateElementValue(0);
    
    
  }, 0);

});
// preLoader


let character = document.querySelector('#character');
let block = document.querySelector('#block');

document.querySelector('#jumpeBtn').addEventListener('click', () => {
  character.classList.add('jumpe')
  setTimeout(() => {
    character.classList.remove('jumpe')
  }, 1000);
});
// jumpeBtn



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


  if (blockLeft < 60 && blockLeft > 0 && characterBottom > 220) {
    
    clickSound.play();
    gameOver.style.display = 'flex'
    clearInterval(checkDead); // Stop the interval when the condition is met

restart.addEventListener('click', () => {

  restart.innerHTML = "please wait..."
  setTimeout(() => {
    

    location.reload()
    

  }, 1000);

})

  }

}, 0);



}, 1);

});