function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let currentElement = arr[i];
      let j = i - 1;
  
      // Move elements of arr[0..i-1], that are greater than currentElement,
      // one position ahead of their current position
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place currentElement at its correct position
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
  const myArray = [64, 34, 25, 12, 22, 11, 90];
  insertionSort(myArray);
  console.log("Sorted array is:", myArray);