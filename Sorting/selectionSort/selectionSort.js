/*Selection sort is a simple comparison-based sorting algorithm that works by 
dividing the input list into two parts: a sorted portion and an unsorted portion. 
The algorithm repeatedly selects the minimum (or maximum, depending on the sorting order)
 element from the unsorted portion and moves it to the end of the sorted portion. This process 
 continues until the entire list is sorted.
 1.Divide the List: 
 2.Find the Minimum: 
 3.Swap with the First
 4.Expand the Sorted Portion
 5.Repeat
 6.Result:

 time complexity is O(n^2) in the worst case, where "n" is the number of elements in the list. 
 */


 function selectionSort(arr){

    let temp
    let n=arr.length
    for(let i=0;i<n;i++){
        let minIndex=i
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        if(minIndex!==i){
            temp=arr[i]
            arr[i]=arr[minIndex]
            arr[minIndex]=temp
        }
    }
    return arr
 }
let arr=[4,6,2,9,10,5]
arr=[10,20,99,100,221,3445,1]
 console.log(selectionSort(arr))


