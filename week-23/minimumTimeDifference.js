// https://leetcode.com/contest/leetcode-weekly-contest-23/submissions/detail/96375097/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    var ms = timePoints.map((x) => hhmm2m(x));
    ms.sort((a,b) => a-b);
    
    console.log(ms);
    
    var min = Infinity;
    for (var i = 0; i <= ms.length-2; i++) {
        var diff = getMinDiff(ms[i], ms[i+1]);
        if (diff < min) min = diff;
    }
    var firstLastDiff = getMinDiff(ms[0], ms[ms.length-1]);
    if (firstLastDiff < min) min = firstLastDiff;
    
    return min;
};

// Converts HH:MM to minutes
// [0-1439] minutes
var hhmm2m = function(hhmm) {
    var h = parseInt(hhmm.substr(0, 2));
    var m = parseInt(hhmm.substr(3, 2));
    return h * 60 + m;
}

var getMinDiff = function(a, b) {
    var diff1 = Math.abs(a - b);
    var diff2 = 1440 - Math.abs(a - b);
    return Math.min(diff1, diff2);
}

