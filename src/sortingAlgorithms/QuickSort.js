export default function getQuickSortAnimations(array) {
    const animations = [];
    console.log(array);
    if (array.length <= 1) return array;
    quickSort(array, animations, 0, array.length - 1);
    console.log(array);
    return animations;
  }
  
  function quickSort(
    array,
    animations,
    startIdx,
    endIdx,
  ) {
    if (startIdx < endIdx) {
      const pi = quickSortHelper(array, animations, startIdx, endIdx);
      quickSort(array, animations, startIdx, pi - 1);
      quickSort(array, animations, pi + 1, endIdx);
    }
  }
  
  function quickSortHelper(
    array, 
    animations,
    startIdx,
    endIdx,
  ) {
    let pivot = array[endIdx];
    animations.push([endIdx, pivot, 2]);
  
    let i = startIdx;
  
    for (let j = startIdx; j < endIdx; j++) {
      animations.push([i, array[i], 3]);
      animations.push([j, array[j], 1]);
      if (array[j] < pivot) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        animations.push([i, array[i], 3]);
        animations.push([j, array[j], 1]);
        animations.push([i, array[i], 0]);
        i++;
      }
      animations.push([j, array[j], 0]);
    }
    const temp = array[i];
    array[i] = array[endIdx];
    array[endIdx] = temp;
    animations.push([i, array[i], 2]);
    animations.push([endIdx, array[endIdx], 0]);
    animations.push([i, array[i], 0]);
    return i;
  }