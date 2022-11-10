function array_is_unique_sort(array1, array2) {
  array1.sort();
  array2.sort();
  let newA = [];
  let count = 0;
  for (let i = 0; i < array1.length; ++i) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        
        newA[count] = array1[i];
        ++ count;
      }
    }

  }
  return newA;
}
let array1 = [1, 3, 4, 2, 7, 9, 10, 6, 8];
let array2 = [1, 3, 9, 11, 5, 7, 13];

let result1 = array_is_unique_sort(array1,array2);
console.log(result1);

//Phạm Huỳnh Tiến Đạt
