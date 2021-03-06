// Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

function isStringUnique(word){
    let characterCount = {}
    let count = 1
    for(character of word){
        if(character in characterCount){
            return "String is not unique"
        }
        characterCount[character] = count
    }
    return "String is unique"
}

// Given two strings, write a method to decide if one is a permutation of the
// other.

function isStringAPermutation(wordA, wordB){
    let theCharactersOfWordA = {}
    let theCharactersOfWordB = {}
    let count = 1

    for(character of wordA){
        if(character in theCharactersOfWordA){
            theCharactersOfWordA[character]++
            continue
        }
        theCharactersOfWordA[character] = count
    }
   
    for(character of wordB){
        if(character in theCharactersOfWordB){
            theCharactersOfWordB[character]++
            continue
        }
        theCharactersOfWordB[character] = count
    }

    for(character of wordB){
        if((theCharactersOfWordB[character] != theCharactersOfWordA[character])){
            return "String is not a permutation"
        } 
    }
    return "String is a permutation"
}

// Write a method to replace all spaces in a string with '%20: You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith "J 13
// Output: "Mr%20J ohn%20Smith"

function replaceSpacesInString(str){
    return str.replace(/ /g,"%20")

}


// Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat". "atco cta". etc.) 

function isPalindromePermutation(str){
    let count = 1
    let numberOfDuplicates = 0
    characterCount = {}
    for(character of str){
        if(character in characterCount){
            if(characterCount[character] > 2){
                return false
            }
            characterCount[character]++
            numberOfDuplicates =  numberOfDuplicates + 2
            continue
        }

        characterCount[character] = count
    }

    return ((str.length-1) === numberOfDuplicates) ? true:false

    
}

// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away. 

function isOneAway(wordA, wordB){
    let wordACharacterCount = {}
    let wordBCharacterCount = {}
    let count = 1
    let errorTracker = 0

    for(character of wordA){
        if(character in wordACharacterCount){
            wordACharacterCount[character]++
            continue
        }

        wordACharacterCount[character] = count
    }

    for(character of wordB){
        if(character in wordBCharacterCount){
            wordBCharacterCount[character]++
            continue
        }

        wordBCharacterCount[character] = count
    }

    for(character in wordACharacterCount){
        if(character in wordBCharacterCount){
            errorTracker = (wordBCharacterCount[character] - wordACharacterCount[character]) 
            + errorTracker
        }else{
            errorTracker = errorTracker + 1
        }
        
    }
    return (errorTracker > 1) ? false: true

}

// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z). 

function compressString(str){

    let countArray = []
    let count =1
    let index = -1

    for(character of str){
        if(str.charAt(index) === character){
            count = count +1
            if(index === str.length-2){
                countArray.push(count)
            }
        }
        else{
            if(index > -1){
                countArray.push(count)
                count = 1
            }
            countArray.push(character)
        }        

        index = index + 1
        
    }

    return countArray.join("")
   

}

console.log(compressString("aabcccccaaa"))