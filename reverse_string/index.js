const str = 'Hello';

/* function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    const splitString = str.split('');
    // Step 2. Use the reverse() method to reverse the new created array
    const reverseArray = splitString.reverse();
    // Step 3. Use the join() method to join all elements of the array into a string
    const joinArray = reverseArray.join('');
    //Step 4. Return the reversed string
    return joinArray;
}
 */

 //Chaining the three methods together
function reverseString(str) {
    return str.split("").reverse().join("");
}

const reversedString = reverseString(str);
console.log(reversedString);
