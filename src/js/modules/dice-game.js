const listOfAllDice = document.querySelectorAll('.die');
const scoreInputs = document.querySelectorAll('#score-options input');
const scoreSpans = document.querySelectorAll('#score-options span');
const currentRound = document.getElementById('current-round');
const currentRoundRolls = document.getElementById('current-round-rolls');
const totalScore = document.getElementById('total-score');
const scoreHistory = document.getElementById('score-history');
const rollDiceBtn = document.getElementById('roll-dice-btn');
const keepScoreBtn = document.getElementById('keep-score-btn');
const rulesBtn = document.getElementById('rules-btn');
const rulesContainer = document.querySelector('.rules-container');
let isModelShowing = false;
let diceValuesArr = [];
let rolls = 0;
let score = 0;
let total = 0;
let round = 1;

rulesBtn.addEventListener('click', () => {
	isModelShowing = !isModelShowing;
	if (isModelShowing) {
		rulesContainer.style.display = 'block';
		rulesBtn.textContent = 'Hide rules';
	} else {
		rulesContainer.style.display = 'none';
		rulesBtn.textContent = 'Show rules';
	}
});

const updateStats = () => {
	currentRoundRolls.textContent = rolls;
	currentRound.textContent = round;
};

rollDiceBtn.addEventListener('click', () => {
	let count = 0;
	diceValuesArr = [];
	while (diceValuesArr.length < 5) {
		let random = Math.floor(Math.random() * 6) + 1
		diceValuesArr.push(random);
		listOfAllDice[count].textContent = random;
		count++;
	};

	if (rolls === 3) {
		alert("You have made three rolls this round.Please select a score.");
	} else {
		resetRadioOptions();
		rolls++;
		// rollDice();
		updateStats();
		getHighestDuplicates(diceValuesArr);
		detectFullHouse(diceValuesArr);
		checkForStraights(diceValuesArr);
	}
});

const updateRadioOption = (index, score) => {
	let input = scoreInputs[index];
	if (input.disabled) {
		input.disabled = false;
	}
	input.value = score;
	scoreSpans[index].textContent = `, score = ${score}`
};

const getHighestDuplicates = array => {
	let duplicates = {};
	console.log(array);
	array.forEach(number => {
		duplicates[number] = (duplicates[number] || 0) + 1;
	});
	console.log(duplicates);
	let maxCount = 0;
	let maxDuplicate
	let sum = array.reduce((sum, value) => sum + value, 0);
	for (const [duplicate, count] of Object.entries(duplicates)) {
		if (count > maxCount) {
			maxCount = count;
			maxDuplicate = duplicate;
		}
	}
	if (maxCount > 3) {
		updateRadioOption(1, sum);
	}
	if (maxCount > 2) {
		updateRadioOption(0, sum);
	}
	updateRadioOption(5, 0);
};

const resetRadioOptions = () => {
	for (const input of scoreInputs) {
		input.disabled = true;
		input.checked = false;
	}
	for (const span of scoreSpans) {
		span.textContent = '';
	}
};

const updateScore = (selectedValue, achieved) => {
	score += selectedValue;
	totalScore.textContent = score;
	scoreHistory.innerHTML = `<li>${achieved} ; ${selectedValue}</li>`;
};

keepScoreBtn.addEventListener('click', () => {
	let value
	let id
	for (const input of scoreInputs) {
		if (input.checked) {
			value = input.value;
			id = input.id;
		}
	}
	if (value) {
		rolls = 0;
		round++;
		updateStats();
		resetRadioOptions();
		updateScore(value, id);
	} else {
		alert('Select a score');
	}

	if (round === 6) {
		setTimeout(() => {
			alert(`Final score : ${score}`)
		}, 500);
		resetGame();
	}
});

round = 6;
const resetGame = () => {
	listOfAllDice.forEach(element => element.textContent = 0);
	score = 0;
	rolls = 0;
	round = 1;
	totalScore.textContent = score;
	currentRoundRolls.textContent = rolls;
	currentRound.textContent = round;
	resetRadioOptions();
}

const detectFullHouse = (arr) => {
	const counts = {};
	for (const num of arr) {
		if (counts[num]) {
			counts[num]++;
		} else {
			counts[num] = 1;
		}
	}
	const values = Object.values(counts);
	if (values.includes(3) && values.includes(2)) {
		updateRadioOption(2, 25);
	}
	updateRadioOption(5, 0);
};

const checkForStraights = (arr) => {
	const counts = {};
	for (const num of arr) {
		counts[num] = counts[num] ? counts[num] + 1 : 1;
	}
	const keys = Object.keys(counts).join('');
	if (keys === '12345' || keys === '23456') {
		updateRadioOption(4, 40);
	}
	if (keys.slice(0, 4) === '1234' || keys.slice(0, 4) === '2345' || keys.slice(1, 5) === '2345' || keys.slice(1, 5) === '2345' || keys === '3456' || keys.slice(1, 5) == '3456') {
		updateRadioOption(3, 30);
	}
	updateRadioOption(5, 0);
};