// reverse an array

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

let arr=[1,2,3,6,7,8,9]
console.log(reverseArray(arr,0,arr.length))