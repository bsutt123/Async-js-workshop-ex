function createPromise() {
  const fakeResponse = 'hi'
  return new Promise( function(resolve, reject) {
    setTimeout(resolve, 1000, fakeResponse)
  })
}

let myPromise = createPromise()

myPromise.then( function(value) {
  console.log(value)
})

console.log("Hello!")



function createPromise() {
  const fakeResponse = 'hi'
  return new Promise( function(resolve, reject) {
    setTimeout(resolve, 200, fakeResponse)
  })
}

setTimeout(console.log, 0)

let myPromise = createPromise()
myPromise.then( function(value) {
  console.log(value)
})
//this is some syncronous function that blocks the thread of execution for 1000 ms
someFuntionThatBlocksThread() {}
console.log("Hello!")


const myArray = [1,2,3,4,5]

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i])
}

function createIterator(array) {
  let index = 0;
  function next() {
    const currentValue = array[index]
    index++
    return currentValue
  }
  return { next }
}

var myArray = [1,2,3,4,5]
var myIterator = createIterator(array)
console.log(myIterator.next())
console.log(myIterator.next())
console.log(myIterartor.next())

const myArray = [1,2,3,4,5]
for (let element of myArray) {
  console.log(element)
}


function* createGenerator() {
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

const myGenerator = createGenerator();
console.log(myGenerator.next().value)
console.log(myGenerator.next().value)
console.log(myGenerator.next().value)
console.log(myGenerator.next().value)
console.log(myGenerator.next().value)
console.log(myGenerator.next().value)

function* createArrayIterator(array) {
  let index = 0;
  while (true) {
    if (index > array.length) {
      return undefined
    }
    else  {
      const val = array[index]
      index++
      yield val
    }
  }
}

const myArray = [1,2,3,4,5];
const myIterator = createArrayIterator(array);
console.log(myIterator.next().value)
console.log(myIterator.next().value)
console.log(myIterator.next().value)


function* createGenerator(initialValue) {
  const second = yield initialValue+1
  const third = yield second + 4
  const last = yield third + 7
  return last
}

const myGenerator = createGenerator(2)
console.log(myGenerator.next(3).value)
console.log(myGenerator.next(6).value)
console.log(myGenerator.next(3).value)
console.log(myGenerator.next().value)


function* createGenerator(initialValue) {
  const second = yield initialValue+1
  const third = yield second + 4
  const last = yield third + 7
  return last
}

const myGenerator = createGenerator(2)
let foo = myGenerator.next(4).value
let bar = myGenerator.next(8+foo).value
let baz = myGenerator.next(2+bar).value
let buzz = myGenerator.next(10+baz).value

console.log("foo is", foo)
console.log("bar is", bar)
console.log("baz is", baz)
console.log("buzz is", buzz)


function createPromise() {
  const fakeResponse = 'hi'
  return new Promise( function(resolve, reject) {setTimeout(resolve, 1000, fakeResponse)})
}

function* createAsyncGenerator(promise) {
  let val = yield promise
  console.log(val)
}

function resolvePromise(val) {
  myGenerator.next(val);
}

const myPromise = createPromise()
const myGenerator = createAsyncGenerator(myPromise);
const currentPromise = myGenerator.next().value;
currentPromise.then(resolvePromise)


function createPromise() {
  const fakeResponse = 'hi'
  return new Promise( function(resolve, reject) {setTimeout(resolve, 1000, fakeResponse)})
}

async function myAsyncFunction(promise) {
  let val = await promise
  console.log(val)
  return val
}

let myPromise = createPromise()
myAsyncFunction(myPromise)
