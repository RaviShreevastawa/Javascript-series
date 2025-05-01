// Arrays variable that stores more than one value

const arr = [10,20,30,40,50,60]
const arr1 = Array(100,200,300,400,500)

// There are some operations that makes work esiar with arrays

// 1. Push()    -> to add an element at the end of the array
arr.push(70)
console.log("after push ", arr)

//2. pop()     -> To remove an element from the last of the array
arr.pop()
console.log("after POP : ", arr)

// 3. Unshift     -> To add an element at the start of the Array
arr.unshift(0)
console.log("after unshift", arr)

// 4. shift()      -> To remove an element form the start of the array
arr.shift()
console.log("after shift" , arr)

// 5. includes   -> To check a element is a part of the array or not 
console.log("90 is the part of array : ", arr.includes(90))

// 6. indexof()     -> To check the index of a element
console.log("The index of the 50 is : ", arr.indexOf(50))

// 7. join      -> adds all the elements of the array into a string, seperated by the specified seperator
console.log("Afer aplying join : ", arr.join())
console.log("Afer aplying join : ", typeof arr.join())

// 8. slice      -> It creates a slice of an array, but we have give the start and end index of the slice, it didnt include the last index specified
console.log("Array between 1 - 4 : ", arr.slice(1,4))

// 9. splice()      -> It remove the slice from the array and print rest of the array, also mension the index , and it consider the last index 
console.log("The rest of the array is : ",  arr.splice(2,4))

// 10. concate()     -> It adds the array values into another array 
console.log("After adding arr1 into arr :", arr.concat(arr1))

//  11 . flat()    -> To convert a nested array into the array
const real_array = [1,2,3,[4,5,6], 7,8,[6,7],[4,5]]
const another_array = real_array.flat(Infinity)
console.log("The Single array will be : ",another_array)

//   -> To check a value using array
console.log(Array.isArray("Ravi"))  //    -> To check if given value is an array or not
console.log(Array.from("ravi"))    // -> to convert a value into an array


console.log(Array.from({name : "ravi"}))    //   -> In This case returns the empty array , becuase we have to tell it which one should convert into the array key or value


// Note : We can use "of" instead of "from"

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))



// But we should use Spread operator in this situation