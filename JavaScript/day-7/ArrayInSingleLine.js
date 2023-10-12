var arr=[]
for(var i=0;i<11;i++){
    arr.push(i)
}
console.log(arr.join(" "))
arr.push(11)
console.log("Push will add element at last index in array")
console.log()
console.log(arr.join(" "))
arr.pop()
console.log("POP will remove last element from array")
console.log()

console.log(arr.join(" "))
arr.shift()
console.log("Shift will remove first element from array")
console.log()

console.log(arr.join(" "))
arr.unshift(0)
console.log("Unshift will add element at first index in array")
console.log()

console.log(arr.join(" "))

var multiply=arr.map((i) => i*2)
console.log("Map function is anonymous function")
console.log(multiply.join(" "))