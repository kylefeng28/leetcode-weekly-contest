// From https://stackoverflow.com/questions/4313841/javascript-how-can-i-insert-a-string-at-a-specific-index
String.prototype.splice = function(i, newStr) {
	return this.slice(0, i) + newStr + this.slice(i);
};

// From http://stackoverflow.com/a/19746771/5191980
Array.prototype.equals = function(other) {
	return this.length==other.length && this.every(function(v,i) { return v === other[i]});
}

/**
    * @param {string} board
	*  * @param {string} hand
	*   * @return {number}
	*    */
var findMinStep = function(board, hand) {
	var boardMatches = {};
	boardMatches.R = getMatchesIndices(board, /R/g);
	boardMatches.Y = getMatchesIndices(board, /Y/g);
	boardMatches.B = getMatchesIndices(board, /B/g);
	boardMatches.G = getMatchesIndices(board, /G/g);
	boardMatches.W = getMatchesIndices(board, /W/g);

	var handMatches = {};
	handMatches.R = getMatchesIndices(hand, /R/g).length;
	handMatches.Y = getMatchesIndices(hand, /Y/g).length;
	handMatches.B = getMatchesIndices(hand, /B/g).length;
	handMatches.G = getMatchesIndices(hand, /G/g).length;
	handMatches.W = getMatchesIndices(hand, /W/g).length;

	// Random looper
	for (var i = 0; i < 1000; i++) {
		if (handMatches.R > 0 && !boardMatches.R.equals([])) {
			console.log("OK. Do something now.");
		}
	}

};

function getMatchesIndices(str, re) {
	var indices = [];
	while ((match = re.exec(str)) != null) {
		indices.push(match.index);
	}
	return indices;
}


// Remove 3+ occurences of RYBGW and recurse
function remove(str) {
	var newStr = str + ''; // copy
	newStr = newStr.replace(/R{3,}/, '');
	newStr = newStr.replace(/Y{3,}/, '');
	newStr = newStr.replace(/B{3,}/, '');
	newStr = newStr.replace(/G{3,}/, '');
	newStr = newStr.replace(/Y{3,}/, '');

	if (str == newStr) { return newStr; }
	else { return remove(newStr); }
}

function debug() {
	console.log(findMinStep("WRRBBW", "RB"));
}

debug();
