// Has Duplicated question:
const hasDuplicate1 = (arr) => {
    let newArr = [...new Set(arr)];
    return !(newArr.length === arr.length);
}

// Solution
const hasDuplicate2 = arr => new Set(arr).size !== arr.length

// From the tests I ran, my code works, and though it's longer, I prefer the 'expanded' look where it's easier to tell what's happening and why. The solution is far shorter, but not easy to read. I leave that decision up to you. 

// vowelCount question:
const vowelCount1 = (str) => {
    let strMapped = new Map(str);
    for (let counter of strMapped) {
        if (counter.contains('aeiou')) {
            strMapped[counter, 0];
            
        }
    }
}
// Got lost here and had to look at solution. 

// Solution: 
function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount2(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }

// This is very similar to an older exercise I should have referenced before attempting this one. Again, no excuse; trying to do it off of memory to see how much I had retained. Evidently, not enough. 