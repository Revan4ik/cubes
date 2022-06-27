for (let i = 0; i < window.innerWidth / 100; i++) {
    let cell = document.createElement("div"),
        game = document.querySelector(".game")
    game.appendChild(cell)
    cell.className = "cell"
}
 var cube = document.querySelector('.cube');
 var state = document.querySelector('.state');
 var meessage = document.querySelector('.output');
 var fishka = document.querySelector('.fishka')
 var currentClass = '';
 let numbers = 0;
//  window.addEventListener('load',function(){
//      rollIt();
//  });
 
 function rollIt() {

     var rndNmbr = Math.floor(Math.random() * 6) + 1;
     var showClass = 'show-' + rndNmbr;
     
     if(state.textContent == rndNmbr) {
         state.innerHTML = rndNmbr;
         meessage.innerHTML = 'Wow! You got ' + rndNmbr + ' again.';
     }
     else {
         state.innerHTML = rndNmbr;
         meessage.innerHTML = 'You rolled ' + rndNmbr;
     }
     
     if ( currentClass ) {
         cube.classList.remove( currentClass );
     }
     cube.classList.add( showClass );
     currentClass = showClass;
     numbers += rndNmbr
     fishka.style.left = 30 + numbers * 95 + "px"
 }
 