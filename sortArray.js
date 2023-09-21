// sort a given array


function sortArray(arr,n){
let ch
    for(let i=0;i<n;i++){
        console.log(arr[i])
        for(let j=i+1;j<n;j++){
            if(arr[i]<=arr[j]){
            }else if(arr[i]>arr[j]){
                ch=arr[i]
                arr[i]=arr[j]
                arr[j]=ch
                
            }
        }
    }
    return arr
    
}

let arr=[ 1, 2, 3, 2, 5, 6 ]

console.log(sortArray(arr,arr.length))