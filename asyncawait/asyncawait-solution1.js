//this is a fake xml hhtp request. given a set of urls, it responds with the result after the delay
function fakeXHR(url, callback) {
  const data = {
    "first": "Me First",
    "second": "Me Second",
    "third": "Me Third"
  }

  const delay = (Math.random()*10000 % 6000) + 1000
  console.log(delay)
  setTimeout(function() { callback(data[url]) } , delay)
}

//this function will actually make the request to the url
function makeRequest(url) {
  return new Promise(function(resolve, reject) {
    fakeXHR(url, resolve)
  })
}

async function printValues() {
  const p1 = makeRequest("first")
  const p2 = makeRequest("second")
  const p3 = makeRequest("third")


  console.log(await p1)
  console.log(await p2)
  console.log(await p3)
}

//request everything in parallel to ensure the fastest response possible
printValues()