export default function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSort(animations, array, array.length - 1);
    return animations;
  }
  
  function selectionSort(
    animations,
    array,
    endIdx,
  ) {
    let i = 0;
    while ( i < endIdx) {
      let min_pos = i;
      animations.push([min_pos, array[i], 2]);
      let j = i + 1;
      while (j <= endIdx) {
        animations.push([j, array[j], 1]);
        if (array[j] < array[min_pos]) {
          animations.push([min_pos, array[min_pos], 0]);
          min_pos = j;
          animations.push([min_pos, array[min_pos], 2]);
        } else {
          animations.push([j, array[j], 0]);
        }
        j++;
      }
      animations.push([i, array[i], 2]);
      animations.push([i, array[min_pos], 2]);
      animations.push([min_pos, array[i], 2]);
  
      const temp = array[i];
      array[i] = array[min_pos];
      array[min_pos] = temp;
  
      animations.push([i, array[i], 0]);
      animations.push([min_pos, array[min_pos], 0]);
      i++;
    }
  }