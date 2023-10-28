// Sum zero
// Time complexity: O(n^2)
// Space complexity: O(1)

exampleArray = [2,4,6,-6,8]
function checkTrue(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(i !== j) {
                if(array[i] + array[j] === 0) {
                return true
            }
        }
    }

}
return false
}


console.log(checkTrue(exampleArray))

// Unique characters
// Time complexity: O(n^2)
// Space complexity: O(1)

const hasUniqueChars = (word) => {
    for(let i = 0; i < word.length; i++) {
        for(let j = i + 1; j < word.length; j++) {
            if(word[i] === word[j]) {
                return false
            }
        }
    }
    return true
}


console.log(hasUniqueChars('Ane'))


// Pangram Sentence
// Time complexity: O(n)
// Space complexity: O(1)

let exampleStr = "The quick brown fox jumps over the lazy dog!"

const pangramFunction = string => {
    let allLetters = 'abcdefghijklmnopqrstuvwxyz'
    let compareStrings = ''
    string = string.toLowerCase()
    for(let i = 0; i < string.length; i++) {
        let char = string[i]
        if(allLetters.includes(char)) {
            if(!compareStrings.includes(char)) {
                compareStrings += char
            }
        }
    }
    compareStrings = compareStrings.split('').sort().join('')
    if(compareStrings == allLetters) {
        return true
    } else {
        return false
    }
}
console.log(pangramFunction(exampleStr))

// Longest word
// Time complexity: O(n)
// Space complexity: O(1)
let exampleWords = ["hi", "hello"]
const longestWord = array => {
    let longestLength = 0
    for(let i = 0; i < array.length; i++) {
        if(array[i].length > longestLength) {
            longestLength = array[i].length
        }
    }
    return longestLength
}

console.log(longestWord(exampleWords))


//would the space complexity be the same for all of these functions because they are all always returning only one value?