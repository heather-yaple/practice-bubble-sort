
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;


  do {
    swapped = false;


    //Traverse through all elements in the array

    for (let i = 0; i < arr.length-1; i++) {
      
      // Compare adjacent elements and swap if needed
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }



  

      // If the current value is greater than its neighbor to the right
        // Swap those values

        // Do not move this console.log
        console.log(arr.join(","));

    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
    n--;
  } while (swapped);

  //arr = [8, 20, -2, 4, -6]
  //bubbleSort(arr)
  //console.log(arr)
}

module.exports = bubbleSort;