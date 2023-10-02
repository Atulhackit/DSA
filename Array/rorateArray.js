// rotate an array

function reverseArray(arr,s,e){
    let temp
    
    while(s<e){
        temp=arr[s]
        arr[s]=arr[e]
        arr[e]=temp
        s++,e--
    }
    return arr
}

function rotateArray(arr,k){
    reverseArray(arr,0,arr.length-k-1)
    reverseArray(arr,arr.length-k,arr.length-1)
    reverseArray(arr,0,arr.length-1)
    
    return arr
    
}
let arr=[1,2,3,6,7,8,9]
console.log(rotateArray(arr,3))