// https://leetcode.com/contest/leetcode-weekly-contest-23/submissions/detail/96371036/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	var reversed = "";
	var restant = s.length;

	for (var i = 0; i < s.length && restant >= 2*k; i += 2*k) {
		var tmp = s.substr(i, k).split('').reverse().join('');
		reversed += tmp;
		reversed += s.substr(i+k, k);
		restant -= 2*k;
	}

	if (restant < k) {
		reversed += s.substr(i, k).split('').reverse().join('');
	}
	else {
		reversed += s.substr(i, k).split('').reverse().join('');
		reversed += s.substring(i+k, s.length);
	}

	return reversed;
};
