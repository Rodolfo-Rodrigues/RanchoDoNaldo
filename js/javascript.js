let showMenu = document.querySelector('.show_menu').addEventListener('click', clicar)
function clicar(){
	let menu = document.querySelector('#menu ul')
	menu.classList.toggle('active')
}