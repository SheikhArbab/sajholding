let character = document.querySelector('#character');
let block = document.querySelector('#block');

document.querySelector('#jumpeBtn').addEventListener('click', () => {

    character.classList.add('jumpe')
    
    setTimeout(() => {
        
        
        character.classList.remove('jumpe')

    
        
    }, 1000);

});




let audioButtons = Array.from(document.getElementsByClassName("audioBtn"));
audioButtons.forEach(function (button) {
  button.addEventListener("click", playClickSound);
});

function playClickSound() {
  let clickSound = document.getElementById("clickSound");
  clickSound.currentTime = 0;
  clickSound.play();
}