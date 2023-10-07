/* 
Bubble sort is a simple comparison-based sorting algorithm that repeatedly steps through
 the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order. 
This process continues until no more swaps are needed, indicating that the list is sorted.

Start at the Beginning: The algorithm starts at the beginning of the list.

Compare Adjacent Elements: It compares the first two elements in the list. If the first element is greater than the second, it swaps them to put them in the correct order. If they are already in the correct order, it leaves them as they are.

Move to the Next Pair: The algorithm then moves to the next pair of adjacent elements (the second and third elements) and repeats the comparison and swapping process.

Continue Iterating: The algorithm continues iterating through the list, comparing and swapping adjacent elements as needed, until it reaches the end of the list. This constitutes one pass through the list.

Repeat Passes: Steps 2-4 are repeated for multiple passes through the list. In each pass, the largest unsorted element "bubbles up" to its correct position at the end of the list.

Optimization: An optimization can be applied to bubble sort by keeping track of whether any swaps were made during a pass. If no swaps were made during a pass, it means that the list is already sorted, and the algorithm can terminate early.

Result: Once no more swaps are needed during a pass (or after iterating through the list without any swaps), the list is considered sorted.

Bubble sort is not considered an efficient sorting algorithm, especially for large lists, because its worst-case time complexity is O(n^2), where "n" is the number of elements in the list. It is primarily used for educational purposes or for small lists where simplicity of implementation is more important than sorting speed. Other sorting algorithms like quicksort or mergesort are typically preferred for practical applications due to their better performance characteristics.

*/

function bubbleSort(arr){
    let temp
    let n=arr.length
    let isSwaped=false
    for(let i=1;i<n;i++){
       for(let j=0;j<(n-i);j++){
           if(arr[j]>arr[j+1]){
            temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            isSwaped=true
           }else {
            isSwaped=false
           }
        }
        if(!isSwaped){
            break
        }

    }
    return arr
}

let arr=[98,2,12,45,6,1]
console.log(bubbleSort(arr))


function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
  
    do {
      swapped = false;
  
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap arr[i] and arr[i + 1]
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
  
          swapped = true;
        }
      }
    } while (swapped);
  
    return arr;
  }
  
  // Example usage:
  const myArray = [64, 34, 25, 12, 22, 11, 90];
  bubbleSort(myArray);
  console.log("Sorted array is:", myArray);
  