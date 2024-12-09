function myMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  
  function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
  
  function myFilter(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  function myFlatMap(arr, callback) {
    return myReduce(
      arr.map(callback),
      (acc, value) => acc.concat(value),
      []
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  console.log("Original array:", numbers);
  
  const doubled = myMap(numbers, (x) => x * 2);
  console.log("Mapped array (doubled):", doubled);
  
  const sum = myReduce(numbers, (acc, x) => acc + x, 0);
  console.log("Reduced value (sum):", sum);
  
  const evenNumbers = myFilter(numbers, (x) => x % 2 === 0);
  console.log("Filtered array (even numbers):", evenNumbers);
  
  const nestedArray = [[1, 2], [3, 4], [5]];
  const flatMapped = myFlatMap(nestedArray, (x) => x.map((y) => y * 2));
  console.log("FlatMapped array:", flatMapped);
  