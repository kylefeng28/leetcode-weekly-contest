# [LeetCode Weekly Contest 23](https://leetcode.com/contest/leetcode-weekly-contest-23/)

| Problem                           | Score |
|-----------------------------------|-------|
| Reverse String II                 |   3   |
| Minimum Time Difference           |   5   |
| Construct Binary Tree from String |   6   |
| Word Abbreviation                 |   8   |

## 541. Reverse String II
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.

### Example:
```
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
```

### Restrictions:
1. The string consists of lower English letters only.
2. Length of the given string and k will in the range [1, 10000]

## 539. Minimum Time Difference
Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.

### Example 1:
```
Input: ["23:59","00:00"]
Output: 1
```

### Note:
The number of time points in the given list is at least 2 and won't exceed 20000.
The input time is legal and ranges from 00:00 to 23:59.

## 536. Construct Binary Tree from String
You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.

You always start to construct the **left** child node of the parent first if it exists.

### Example:
```
Input: "4(2(3)(1))(6(5))"
Output: return the tree root node representing the following tree:

       4
     /   \
    2     6
   / \   / 
  3   1 5   
```

### Note:
There will only be `'('`, `')'`, `'-'` and `'0'` ~ `'9'` in the input string.

## 527. Word Abbreviation
Given an array of n distinct non-empty strings, you need to generate **minimal** possible abbreviations for every word following rules below.

1. Begin with the first character and then the number of characters abbreviated, which followed by the last character.
2. If there are any conflict, that is more than one words share the same abbreviation, a longer prefix is used instead of only the first character until making the map from word to abbreviation become unique. In other words, a final abbreviation cannot map to more than one original words.
3. If the abbreviation doesn't make the word shorter, then keep it as original.

### Example:
```
Input: ["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"]
Output: ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]
```

### Note:
1. Both n and the length of each word will not exceed 400.
2. The length of each word is greater than 1.
3. The words consist of lowercase English letters only.
4. The return answers should be in the same order as the original array.
