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


function createRequester() {
  promisesQueue = []
  function makeRequest(url) {
    let prom =  new Promise(function(resolve, reject) {
      fakeXHR(url, resolve)
    })
    promisesQueue.push(prom)
    if (promisesQueue.length === 1) {
      queue()
    }
  }

  async function queue() {
    while (promisesQueue.length > 0) {
      let val = await promisesQueue[0]
      console.log(val)
      promisesQueue.shift()
    }
  }

  return makeRequest
}

var makeRequest = createRequester()
//request everything in parallel to ensure the fastest response possible
makeRequest("first")
makeRequest("second")
makeRequest("third")