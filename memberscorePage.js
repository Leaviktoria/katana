const cheatButton = document.querySelector('#cheat');
const finalScore = document.querySelector('#finalscore');

const scoreCounter = () => {
	finalScore.innerHTML++;
	cheatButton.style.backgroundColor = 'red';
	cheatButton.innerHTML = 'CAN WE GET MUCH HIGHER??';
};

cheatButton.addEventListener('click', scoreCounter);
