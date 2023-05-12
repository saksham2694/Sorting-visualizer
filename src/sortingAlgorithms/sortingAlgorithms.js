export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getInsertionSortAnimations(array) {
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

export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  selectionSort(animations, array, array.length - 1);
  console.log(array);
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