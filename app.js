
const board = document.querySelector('.board');
const cross = document.querySelector('.cross');

let score = 0;

board.addEventListener('mousemove', function(e){
    cross.style.left = e.pageX -50 + 'px',
    cross.style.top = e.pageY - 50 + 'px' //pozycja kursora na stronie
})

setInterval(function(){
    const div = document.createElement('div');
    div.classList.add('zombie');

    const min = 20;
    const max = 250;
    const pos = Math.floor(Math.random()*(max-min+1)+min)

    div.style.bottom = `${pos}px` 
    //ale równie dorze mogłoby być pos + 'px'
    div.style.zIndex = max - pos;

    const min1 = 3;
    const max1 = 8;
    const time = Math.floor(Math.random()*(max1-min1+1)+min1)

    div.style.animationDuration = `0.3s, ${time}s`;

    board.appendChild(div);

    div.addEventListener('mousedown', function(){
        const highScore = document.querySelector('.score span');
        highScore.innerText = score += 1;
        this.remove();
    })

    const zombies = document.querySelectorAll('.zombie');
    for (let el of zombies) {
        el.offsetLeft = el.offsetLeft;
    }

}, 900);