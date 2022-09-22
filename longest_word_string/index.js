const findLongestWord = (str) => {
  const longestWord = str.split('').reduce((longest, currentWord) => {
    console.log(currentWord)
    return currentWord.length > longest.length ? currentWord : longest
  }, '')
  return longestWord
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'))
