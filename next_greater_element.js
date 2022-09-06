const nextGreaterElement = (arr, n) => {
  var next;
  const totalArr = [];
  for (let i = 0; i < n; i++) {
    const obj = {};
    next = -1;
    for (let j = parseInt(i) + 1; j < n; j++) {
      if (parseInt(arr[i]) < parseInt(arr[j])) {
        next = arr[j];
        break;
      }
    }

    obj[arr[i]] = next;
    const keys = Object.keys(obj).map(Number);
    obj[keys] = next;
    console.log(keys);
    totalArr.push(obj);
    //console.log('arr[i]', arr[i], "--------------", next);
  }
  console.log(totalArr);
}
const arr = [1, 2, 25, 3, 42, 6];
const n = arr.length;
nextGreaterElement(arr, n);