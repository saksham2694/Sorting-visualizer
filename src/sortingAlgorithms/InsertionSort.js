export default function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSort(array, animations);
    return animations;
  }
  
  function insertionSort(
    array,
    animations,
  ) {
    let i = 1;
    while (i < array.length) {
      let j = i - 1;
      let temp = array[i];
  
      while (j >= 0 && array[j] > temp) {
        animations.push([j + 1, j]);
        animations.push([temp, array[j]]);
        animations.push([1, 0]);
  
        animations.push([j + 1, j]);
        animations.push([array[j], temp]);
        animations.push([0, 0]);
  
        array[j + 1] = array[j];
        array[j] = temp;
  
        
  
        j--;
      }
      j++;
      animations.push([j, j]);
      animations.push([array[j], array[j]]);
      animations.push([0, 0]);
      i++;
    }
  }