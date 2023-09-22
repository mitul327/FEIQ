const str = 'happy day'

var result = [...str].reduce((res, char) => ((res[char] = (res[char] || 0) + 1), res), {})
console.log(result)
//output :{h:1,a:2,p:2,y:2,d:1}
