// there are overall 7 datatypes 

//  Primitive (call by value) it modifies the actual value in the memory

// 1. const,    -> Cannot be changed
const name = "Rachit"
console.log(name)

// 2. var,    -> Functional Scope , Can be changed
var city = "Sirsi"
console.log(city)

// 3. let,      -> Block Scoped , Can be Changed
let CurrentCity = "Moradabad"
console.log(CurrentCity)

// 4. bigInt,      -> To Store a big number, denotes by "n" at the last of the number
const age = BigInt(1234567643355)
console.log(age)

// 5. boolean,
True
false

// 6. Symbol,
const course = Symbol("MCA")
console.log(course)

// 7. undefined,     -> When value is called but not initialised

// 8. null       -> when Value is initialiesed but not declaired


//  Non-Primitive (call by reference) it modifies the copy using reference

// 9. objets,          -> treats all the keys and values as a string
const User = {   
    name : "Rachit",
    "age" : "4",
    address : "Chandausi",
    [course] : "BCA"    // Symbol
}
console.log(User.name)
console.log(User["age"])
console.log(User[course])
console.log(typeof User.name)
console.log(typeof User["age"])
console.log(typeof User[course])