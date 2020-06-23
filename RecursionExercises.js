function reverse(str){
    let negate = 1
    let newStr = str.charAt((str.length-negate))
    function actualReverse(){
        negate++
        newStr+=str.charAt((str.length-negate))
        if(negate === str.length){
            return newStr
        }
        return actualReverse()
    }
    return actualReverse()
}


function isPalindrome(str){
    let negate = 1
    let progate = 0
    let middle = (str.length -1)/2

    if (str.length%2 === 0){
        return false
    }

    function findPalindrome() {
        let index2 = str.charAt((str.length-negate))
        let index1 = str.charAt(progate)
        if (index1 === index2){
            if (progate === middle){
                return true
            }
            negate++
            progate++
        } else {
            return false
        }
        return findPalindrome()
    }
    return findPalindrome()
}

function flatten(arr){
    let nArr = []

    for (let y of arr){
        if (Array.isArray(y)){
           nArr = nArr.concat(flatten(y))
        }else {
            nArr.push(y)
        }
    }
    return nArr
}

function capitalizeFirst (arr) {
    let i =0
    let temp

    function doCapitalize() {
        let j = 0
        for (let x of arr[i]){
            if (j === 0){
                temp = x.toUpperCase()
                j++
            }else{
                temp+=x
            }
        }
        arr[i] = temp
        i++
        if (i === (arr.length)){
            return
        }
        doCapitalize()

    }

    doCapitalize()
    return arr

}

function nestedEvenSum (obj) {
    let totalSum = 0
    for (let x in obj){
        if (obj[x]%2 === 0){
            totalSum+=obj[x]
        } else if (typeof obj[x] === "object"){
            totalSum = totalSum + nestedEvenSum(obj[x])
        }
    }
    return totalSum
}

function capitalizeWords (arr) {
    let i = 0;
    function capital() {
        arr[i] = arr[i].toUpperCase()
        i++
        if (i === arr.length){
            return arr
        }

        return capital()
    }
    return capital()
}

function stringifyNumbers (obj) {
    let newObj = {}
    function doString() {
        for (let x in obj){
            if (typeof obj[x] === "number"){
                newObj[x] = obj[x].toString()
            }
            else if (Array.isArray(obj[x])){
                newObj[x] = obj[x]
            }
            else if (typeof obj[x] === "object"){
                newObj[x] = stringifyNumbers(obj[x])

            }
            else {
                newObj[x] = obj[x]
            }
        }
        return newObj
    }
    return doString()
}

function collectStrings(obj) {
    let arr = []
    for (let x in obj){
        if (typeof obj[x] === "string"){
            arr.push(obj[x])
        } else if (typeof obj[x] === "object"){
            arr = arr.concat(collectStrings(obj[x]))
        }
    }
    return arr
}





