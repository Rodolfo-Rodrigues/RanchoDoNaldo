let showMenu = document.querySelector('.show_menu').addEventListener('click', clicar)

function clicar() {
    let menu = document.querySelector('#menu ul')
    menu.classList.toggle('active')
}

onload = start;

function start() {
    var i = 1;

    function Move() {
        i = (i % 2) + 1; // 2 is the Number of image in slider
        document.getElementById('i' + i).checked = true;
    }
    setInterval(Move, 15000); //change img in 15 sec
}
/*
const element = document.querySelector('.animate');
element.classList.add('animate__animated', 'animate__pulse', 'animate__infinite');
element.style.setProperty('--animate-duration', '1.5s');

const element2 = document.querySelector('.animate2');
element2.classList.add('animate__animated', 'animate__pulse', 'animate__infinite');
element2.style.setProperty('--animate-duration', '1.5s');
*/