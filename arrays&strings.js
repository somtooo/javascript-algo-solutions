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

console.log(isStringUnique("madd"))