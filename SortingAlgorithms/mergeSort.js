function mergeSortedArray(arr1,arr2) {
    let mergedArray = []
    let i = 0;
    let j = 0;
    while (i < arr1.length && j<arr2.length){
        if (arr1[i] < arr2[j]){
            mergedArray.push(arr1[i])
            i++
        } else {
            mergedArray.push(arr2[j])
            j++
        }
    }
    while (j <arr2.length){
        mergedArray.push(arr2[j])
        j++
    }
    while (i <arr1.length){
        mergedArray.push(arr1[i])
        i++
    }
    return mergedArray
}

function mergeSort(arr, length) {
    if (length <2){
        return arr
    }
    let midPoint = Math.floor(length/2)
    let leftPart = []
    let rightPart = []

    for (let i =0; i<midPoint;i++){
        leftPart[i] = arr[i]
    }

    for (let i = midPoint;i<length;i++){
        rightPart[i-midPoint] = arr[i]
    }


    leftPart = mergeSort(leftPart,midPoint)
    rightPart = mergeSort(rightPart,length-midPoint)
    return mergeSortedArray(leftPart,rightPart)


}
arr = [6,4,2,1,12,9,10]
console.log(mergeSort(arr,arr.length))






