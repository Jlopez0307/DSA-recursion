/** product: calculate the product of an array of numbers. */

function product(nums) {

  if(nums.length === 0){
    return 1;
  } else{
  //Normal case
  return nums[0] * product(nums.slice(1))
  };

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  let longestWord ='';

   const check = str => {
    if(str.length > longestWord.length) longestWord = str;
   }

   words.forEach(item => {
    check(typeof item === 'string' ? item : longest(item));
   });
    return longestWord.length
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {

  if(idx >= str.length) return newStr;
  newStr += str[idx]
  // console.log(newStr)

  return everyOther(str, idx + 2, newStr)
  
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))

  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {

  if(idx >= arr.length) return -1;
  if(arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, rev) {

  if(!rev){
    rev = '';
  }

  //Base Case
  if(str.length === 0){
    rev += str;
    return rev;

  //Normal Case
  } else {
    rev += str.charAt(str.length - 1);
    return revString(str.slice(0, str.length - 1), rev)

  }
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if(typeof obj === "string"){
    return [obj]
  }

  if(typeof obj !== "object" || !obj){
    return [];
  }

  return Object.keys(obj).reduce((acc,key) => {
    return [...acc, ...gatherStrings(obj[key])];
  }, []);

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length) {
  let mid = Math.floor((leftIdx + rightIdx) / 2);
  console.log(mid)

  //Base Case
  if(leftIdx > rightIdx){
    return -1
  }
  //if the val is the middle
  if(val === arr[mid]){
    return mid;
  } 
  
  if (arr[mid] > val) {
    return binarySearch(arr, val, leftIdx, mid - 1);
  }
  return binarySearch(arr, val, mid + 1, rightIdx);



}

// module.exports = {
//   product,
//   longest,
//   everyOther,
//   isPalindrome,
//   findIndex,
//   revString,
//   gatherStrings,
//   binarySearch
// };
