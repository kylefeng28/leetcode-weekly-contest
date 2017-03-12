// https://leetcode.com/contest/leetcode-weekly-contest-23/submissions/detail/96388830/
// Did not count in actual contest

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */

// Add some methods
TreeNode.prototype.addDigit = function(digit) {
    this.sign = this.sign || 1;
    this.val = (Math.abs(this.val) * 10 + parseInt(digit)) * this.sign;
};
TreeNode.prototype.negate = function() { this.sign = -1; };
TreeNode.prototype.addChild = function(child) { return this.left === null ? this.left = child : this.right = child; };

var str2tree = function(s) {
    if (s === "") { return null; }
    
    var stack = [ new TreeNode(0) ];
    var sp = 0;
    
    for (var i = 0; i < s.length; i++) {
        // console.log(stack);
        
        var ch = s.charAt(i);
        // Digit [0-9]
        if (ch.match("[0-9]")) { stack[sp].addDigit(ch); }
        // Negative
        else if (ch == '-') { stack[sp].negate(); }
        // Left paren -> add child
        else if (ch == '(') {
            var child = new TreeNode(0);
            stack[sp].addChild(child);
            stack.push(child);
            sp++;
        }
        // Right paren -> go to parent
        else if (ch == ')') {
            stack.pop();
            sp--;
        }
    }
    
    return stack[0];
};
