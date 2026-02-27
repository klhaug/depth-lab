const testArray = [1, 3, 2, 4]
const testMap = new Map()

const aValue = 5

testMap.set(1, 2)
testMap.set(2, 2)
testMap.set("this is some text", 2)
testMap.set(aValue, 3)


console.log(  testMap.values())
console.log(typeof testMap)
console.log(testMap.get(5))

//Maps bruker objekter som nøkler, og hvilken som helst verdi kan assosieres med den nøkkelen.
//Maps er en egen datastruktur, men har typen "objekt", og er iterabel.