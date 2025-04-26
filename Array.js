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




// But we should use Spread operator in this situation