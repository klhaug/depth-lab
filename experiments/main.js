const age = 12

console.log("TESTING COMPARISONS")
console.log("--------------------")
console.log("Values")


let myName = "Kristian"

let myFirstName = myName

myName = 'Anniken'

console.log("myName:", myName)
console.log("myFirstName:", myFirstName)

console.log("--------------------")
console.log("References")

let firstArray = [1, 0, 2, 3]
let secondArray = firstArray

firstArray[0] = 69

console.log("firstArray", firstArray)
console.log("secondArray", secondArray)