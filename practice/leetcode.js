/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/



/*var romanToInt = function(s) {
    const legend = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
      };
      let total = 0;
    
      for (let i = 0; i < s.length; i++) {
        if (legend[s[i]] < legend[s[i+1]]) {
          total += legend[s[i+1]] - legend[s[i]];
          i++
        } else {
          total += legend[s[i]];
        }
      }
    
      return total;
    };
        
let s="LVIII"
console.log(romanToInt(s))    

*/
/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/
/*
 function pre(str){
  let prefix=""
  for(i=0;i<str[0].length;i++){
    for(j=1;j<str.length;j++){
      if(str[j][i]!==str[0][i]) return prefix
    }
    prefix +=str[0][i]

  }
  return prefix
 }
let str=["flower","flow","flight"]
console.log(pre(str))*/




/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

function bra(s) {
  const par = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  const rep = [];
  for (let i = 0; i < s.length; i++) {
    if (par[s[i]]) {
      rep.push(par[s[i]]);
    } else {
      if (rep.pop() !== s[i]) {
        return false;
      }
    }
  }
  // return rep.length==0
   return true
};
let s = "(}"
console.log(bra(s))
*/

/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

/*var strStr = function(haystack, needle) {  
   
  if (haystack.length >= needle.length) {
    let j;
    for (let i = 0; i < haystack.length; i++) {
      for (j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i+j]) break;
      }
      if (j === needle.length) return i;
    }
  }
  return -1;
}
  
let haystack="hello"

let needle="ll"


console.log(strStr(haystack,needle))*/
/*
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

function dup(nums){
  let start=0
  for(i=0;i<nums.length;i++){
    if(nums[i]!==nums[i+1]){
      nums[start]=nums[i]
      start++
    }
  }
  return arr
}
let nums = [1,1,1]
console.log(dup(nums))
*/
/*
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.


var lengthOfLastWord = function(s) {
  const array = s.split(' ');
  for (let i = array.length -1; i >= 0; i--) {
      if (array[i]) 
      return array[i].length;
  }
};
let s="a"
console.log(lengthOfLastWord(s))
*/
/*
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).



var removeElement = function(nums, val) {
    var start=0
    for(i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[start]=nums[i]
            start++
            
        }
    }
    return start
};

*/ 
/*var addBinary = function(a, b) {
  var x = a.length - 1;
  var y = b.length - 1;
  var over = 0;
  var sum = over;
  var arr = [];
  var str = ""
  while(x >= 0 || y >= 0){
      if(x < 0){
          sum = parseInt(b[y]) + over;
          if(sum > 1){
              over = Math.floor(sum / 2);
              sum = sum % 2;
          }else over = 0;
          arr.push(sum);
      } 
      else if(y < 0){
          sum = parseInt(a[x]) + over;
          if(sum > 1){
              over = Math.floor(sum / 2);
              sum = sum % 2;
          }else over = 0;
          arr.push(sum);
      }
      else{
          sum = parseInt(a[x]) + parseInt(b[y]) + over;
          if(sum > 1){
              over = Math.floor(sum / 2);
              sum = sum % 2;
          }else over = 0;
          arr.push(sum);
      }
      x--; y--
  }
  if(over >= 1) arr.push(1)
  str = arr.reverse().join('');
  return str;
};
*/
/*
Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4


var searchInsert = function(nums, target) {
   let length = nums.length;
    for (let i = 0; i < length; i++) { 
        if (nums[i] >= target) {
            return i;
        };
    };
    return length;
};


let nums = [1,3,5,6]
let  target = 7
console.log(searchInsert(nums,target))
*/
var convertToTitle = function(columnNumber) {
  let str = "1ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter=0;
    let res="";
   while(columnNumber>0){
       letter = columnNumber%26;
       if(letter ===0) letter =26;
       columnNumber = (columnNumber-letter)/26;
       res=str[letter]+res;
   }
   return res;
};
let columnNumber=27
console.log(convertToTitle(columnNumber))