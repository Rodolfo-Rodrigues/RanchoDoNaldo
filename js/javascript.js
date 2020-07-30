let showMenu = document.querySelector('.show_menu').addEventListener('click', clicar)
function clicar(){
	let menu = document.querySelector('#menu ul')
	menu.classList.toggle('active')
}

onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%4)+1; // 5 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,10000); //change img in 10 sec
}
