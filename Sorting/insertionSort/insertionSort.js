
function insertionSort(arr){
    let n=arr.length
    for(let i=1;i<n;i++){
        let temp=arr[i]
        let j=i-1
        for(;j>=0;j--){
            if(arr[j]>temp){
                arr[j+1]=arr[j]
            }else break
        }
        arr[j+1]=temp
    }

    return arr
}

let arr=[3,5,6,19,12,1]
console.log(insertionSort(arr))