var arr=["gaurav","vikas","vimal","aditya",14,8,-1,0.8]
var sortedArray=arr.sort().join(" ")
console.log(sortedArray)

var numArray=[5, 2, 9, 1, 5]
var sortedNumArray=numArray.sort((a,b)=> a-b)

console.log(sortedNumArray)



// object
var myObjectEx={roll1:"vikas",roll2:"gaurav",list:[1,2,3,4,5],total:150}
console.log(myObjectEx)
console.log(myObjectEx.list)
console.log(myObjectEx.total)

// localStorage

var name1 = ["gaurav", "vikas", "vinu"];
// JSON.stringify(name)    convert js into json
// JSON.stringify(name)    convert json to js
localStorage.setItem("studentName", JSON.stringify(name1));   //store
var data=localStorage.getItem("studentName")
console.log(data,"data is printed")
var nameList=JSON.parse(localStorage.getItem("myKey"))
console.log(studentName ,"data on console")
// localStorage.removeItem("student")
 

// Initial Array: [5, 2, 9, 1, 5]

// First Pass:

// Compare 5 and 2: 5 - 2 = 3 (a > b), swap 5 and 2.
// Array: [2, 5, 9, 1, 5]
// Compare 5 and 9: 5 - 9 = -4 (a < b), no swap.
// Compare 9 and 1: 9 - 1 = 8 (a > b), swap 9 and 1.
// Array: [2, 5, 1, 9, 5]
// Compare 9 and 5: 9 - 5 = 4 (a > b), swap 9 and 5.
// Array: [2, 5, 1, 5, 9]
// Second Pass:

// Compare 2 and 5: 2 - 5 = -3 (a < b), no swap.
// Compare 5 and 1: 5 - 1 = 4 (a > b), swap 5 and 1.
// Array: [2, 1, 5, 5, 9]
// Third Pass:

// Compare 2 and 1: 2 - 1 = 1 (a > b), swap 2 and 1.
// Array: [1, 2, 5, 5, 9]
// After these passes, the array is fully sorted in ascending order, and the final sorted array is [1, 2, 5, 5, 9].