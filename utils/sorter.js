const sorter = ((arr, direction = 'ASC') => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        //switch spaces if the earlier one is bigger than the later one
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  if (direction === 'DESC') {
    let reversed = [];
    for (let k = arr.length; k > 0; k--) {
      var end = arr.pop();
      reversed.push(end);
    }
    arr = reversed;
  }
  return arr;
});




module.exports = { sorter };