const cheatButton = document.querySelector('#cheat');
const finalScore = document.querySelector('#finalscore');
const vikiDiv = document.querySelector('#viki');
const leaDiv = document.querySelector('#lea');
const hansDiv = document.querySelector('#hans');
const vikiChildNodes = document.getElementById('viki').childNodes;
const leaChildNodes = document.getElementById('lea').childNodes;

const showVikiSnippet = () => {
	for (let i = 0; i < vikiChildNodes.length; i++) {
		if (vikiChildNodes[i].nodeName.toLowerCase() == 'div') {
			vikiChildNodes[i].style.display = 'none';
		}
	}
	let vikiSnippet = document.createElement('img');
	vikiSnippet.style.visibility = 'visible';
	vikiSnippet.src = './viki-snippet.png';
	vikiSnippet.style.width = '100%';
	vikiSnippet.style.height = '100%';
	vikiDiv.appendChild(vikiSnippet);
};

const showVikiSnippet = () => {
	for (let i = 0; i < vikiChildNodes.length; i++) {
		if (vikiChildNodes[i].nodeName.toLowerCase() == 'div') {
			vikiChildNodes[i].style.display = 'none';
		}
	}
	let vikiSnippet = document.createElement('img');
	vikiSnippet.style.visibility = 'visible';
	vikiSnippet.src = './viki-snippet.png';
	vikiSnippet.style.width = '100%';
	vikiSnippet.style.height = '100%';
	vikiDiv.appendChild(vikiSnippet);
};

const scoreCounter = () => {
	finalScore.innerHTML++;
	cheatButton.style.backgroundColor = 'red';
	cheatButton.innerHTML = 'CAN WE GET MUCH HIGHER??';
};

cheatButton.addEventListener('click', scoreCounter);

vikiDiv.addEventListener('click', showSnippet);
