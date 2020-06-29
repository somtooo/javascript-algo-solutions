function pivot(arr,start=0,end) {
    let swapIndex = start
    let swapLowNumberIndex = start + 1
    for (let i=start+1;i<end;i++){
        if((arr[start] > arr[i]) ){
            [arr[i],arr[swapLowNumberIndex]] = [arr[swapLowNumberIndex],arr[i]]
            swapIndex++
            swapLowNumberIndex++
        }
    }
    [arr[start],arr[swapIndex]] = [arr[swapIndex],arr[start]]
    // console.log(arr)
    return swapIndex
}
let arr= [4,6,9,1,2,5,3]
// let arr = [1,5,2,33,55,50,70]
// console.log(pivot(arr,1,3))


function quickSort(arr,start,index) {
    if ((index-start === 0) || (index-start === 1)){
        return arr
    }
    let newIndex = pivot(arr,start,index)
    let leftSide = quickSort(arr,0,newIndex)
    return quickSort(leftSide, newIndex + 1, index)

}
console.log(quickSort(arr,0,arr.length))


