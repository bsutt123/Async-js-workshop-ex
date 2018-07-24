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

function createRequester() {

  let requestsToPrint = []
  let returnedResponses = {}
  function makeRequest(url) {
    requestsToPrint.push(url)

    fakeXHR(url, function(response) {
      handleResponse(url, response)
    })
  }

  function handleResponse(url, response) {
    if (url === requestsToPrint[0]) {
      console.log(response)
      requestsToPrint.shift()
      continueResponses()
    } else {
      returnedResponses[url] = response
    }
  }
  
  function continueResponses() {
    const nextResponseURL = requestsToPrint[0];
    if (returnedResponses[nextResponseURL]) {
      console.log(returnedResponses[nextResponseURL])
      returnedResponses[nextResponseURL] = undefined
      requestsToPrint.shift()
      continueResponses()
    }
  }

  return makeRequest
}



var makeRequest = createRequester()
//request everything in parallel to ensure the fastest response possible
makeRequest("first")
makeRequest("second")
makeRequest("third")