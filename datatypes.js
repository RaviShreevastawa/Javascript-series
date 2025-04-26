// there are overall 7 datatypes 

//  Primitive (call by value) it modifies the actual value in the memory

// 1. const,
const name = "Rachit"
console.log(name)

// 2. var,
var city = "Sirsi"
console.log(city)

// 3. let,
let CurrentCity = "Moradabad"
console.log(CurrentCity)

// 4. bigInt,
const age = BigInt(1234567643355)
console.log(age)

// 5. boolean,


// 6. Symbol,
const course = Symbol("MCA")
console.log(course)

// 7. undefined,

// 8. null


//  Non-Primitive (call by reference) it modifies the copy using reference
// 9. objets,
const User = {
    name : "Rachit",
    "age" : "4",
    address : "Chandausi",
    [course] : "BCA"
}
console.log(User.name)
console.log(User["age"])
console.log(User[course])
console.log(typeof User.name)
console.log(typeof User["age"])
console.log(typeof User[course])