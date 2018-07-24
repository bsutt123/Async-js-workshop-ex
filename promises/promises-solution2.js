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
function makeRequester() {
  let promiseChain

  function makePromiseRequest(url) {
    const prom = new Promise( function(resolve, reject) {
      fakeXHR(url, resolve)
    })
    if (!promiseChain) {
      promiseChain = prom.then(console.log)
    } else {
      promiseChain = promiseChain.then(() => prom).then(console.log)
    }
  }

  return makePromiseRequest
}


let makeRequest = makeRequester();

makeRequest("first")
makeRequest("second")
makeRequest("third")
