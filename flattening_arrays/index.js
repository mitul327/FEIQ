const arr = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]
//console.log(arr.flat(4)) //4 is the depth of nesting
function flatten(ary) {
  return ary.reduce(function (a, b) {
    if (Array.isArray(b)) {
      return a.concat(flatten(b))
    }
    return a.concat(b)
  }, [])
}

/* const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []) */

console.log(flatten(arr))
