const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover');
const letreiro = document.querySelector('.letreiro');

const jump = () =>{

      mario.classList.add('jump');
      setTimeout(() => {
        mario.classList.remove('jump');
      }, 500);
}

const loop = setInterval(() => {
    
    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d274ad60-4335-4575-b4be-e137ef316038/dfsyy1d-3fbe53d1-c7fe-4595-9b42-ffb3f5cd3364.png/v1/fill/w_144,h_224/game_over_mario__smw___smwb23__by_jackadamen_dfsyy1d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjI0IiwicGF0aCI6IlwvZlwvZDI3NGFkNjAtNDMzNS00NTc1LWI0YmUtZTEzN2VmMzE2MDM4XC9kZnN5eTFkLTNmYmU1M2QxLWM3ZmUtNDU5NS05YjQyLWZmYjNmNWNkMzM2NC5wbmciLCJ3aWR0aCI6Ijw9MTQ0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._NP1g-QMDw2LbVpxxgv5ikuhBfMrxXEDCCSG0iCyA18`;
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        gameover.style.display = "inline-block";
        letreiro.style.display = "inline-block";
        clearInterval(loop);
      }
    
}, 10);



document.addEventListener('keydown' , jump);