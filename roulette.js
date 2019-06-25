const engineers = ['Maciej', 'Kristine', 'Emi', 'Morales', 'Ivan'];

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};

var getRandomPairings = function (person, filteredRoulette) {
	var feedbackRound = filteredRoulette.slice();
	var feedback1, feedback2;
	var randomIndex1 = Math.floor(Math.random() * feedbackRound.length);
	feedback1 = feedbackRound.splice(randomIndex1, 1).toString();

	var randomIndex2 = Math.floor(Math.random() * feedbackRound.length);
	feedback2 = feedbackRound[randomIndex2];
	console.log("Pairing for ", person, ": ", feedback1, " + ", feedback2);
}

var roulette = shuffle(engineers.slice());
console.log(roulette);

roulette.forEach((person) => {
	const filteredRoulette = roulette.filter(engineer => person != engineer);
	getRandomPairings(person, filteredRoulette);
});