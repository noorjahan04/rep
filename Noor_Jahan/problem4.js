function countMultiples(arr) {
  let result = {};
  for(let i = 1; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % i === 0) {
        count++;
      }
    }
    result[i] = count;
  }
  console.log(result);
}
let numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
countMultiples(numbers);
