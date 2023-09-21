// given an sorted reversed array, you need to find the smallest number from it.
// arr = [7,8,9,3,4,6] o/p= 3

function findSmallest(arr,target){
    let low=0
    let high = arr.length -1
    while(low<high){
        mid=Math.floor((low+high)/2)
        if(arr[mid]===target){
            return mid
        }else  if(arr[mid]>target){
            high=mid-1
        }else if(arr[mid]<target) {
            low=mid + 1
        }else{return -1}
        

    }
    
}
const arr = [7,8,9,3,4,6]
console.log(findSmallest(arr,8))