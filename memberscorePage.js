const cheatButton = document.querySelector('#cheat');
const finalScore = document.querySelector('#finalscore');
const vikiDiv = document.querySelector('#viki');
const leaDiv = document.querySelector('#lea');
const hansDiv = document.querySelector('#hans');
const vikiChildNodes = document.getElementById('viki').childNodes;
const leaChildNodes = document.getElementById('lea').childNodes;
const hansChildNodes = document.getElementById('hans').childNodes;

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
	vikiSnippet.style.objectFit = 'fit';
	vikiDiv.appendChild(vikiSnippet);
};

const showLeaSnippet = () => {
	for (let i = 0; i < leaChildNodes.length; i++) {
		if (leaChildNodes[i].nodeName.toLowerCase() == 'div') {
			leaChildNodes[i].style.display = 'none';
		}
	}
	let leaSnippet = document.createElement('img');
	leaSnippet.style.visibility = 'visible';
	leaSnippet.src = './lea-snippet.png';
	leaSnippet.style.width = '100%';
	leaSnippet.style.height = '100%';
	leaSnippet.style.objectFit = 'fit';
	leaDiv.appendChild(leaSnippet);
};

const showHansSnippet = () => {
	for (let i = 0; i < hansChildNodes.length; i++) {
		if (hansChildNodes[i].nodeName.toLowerCase() == 'div') {
			hansChildNodes[i].style.display = 'none';
		}
	}
	let hansSnippet = document.createElement('img');
	hansSnippet.style.visibility = 'visible';
	hansSnippet.src = './hans-snippet.png';
	hansSnippet.style.width = '100%';
	hansSnippet.style.height = '100%';
	hansSnippet.style.objectFit = 'fit';
	hansDiv.appendChild(hansSnippet);
};

const scoreCounter = () => {
	finalScore.innerHTML++;
	cheatButton.style.backgroundColor = 'red';
	cheatButton.innerHTML = 'CAN WE GET MUCH HIGHER??';
};

cheatButton.addEventListener('click', scoreCounter);

vikiDiv.addEventListener('click', showVikiSnippet, { once: true });
leaDiv.addEventListener('click', showLeaSnippet, { once: true });
hansDiv.addEventListener('click', showHansSnippet, { once: true });
