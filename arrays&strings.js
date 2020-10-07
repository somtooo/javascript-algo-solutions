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


