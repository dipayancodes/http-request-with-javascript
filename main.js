// second code

fetch("https://jsonplaceholder.typicode.com/comments")
.then(function(response) {
  if (response.ok) {
    return response.json()
  } else {
    throw new Error("HTTP status code: " + response.status)
  }
})
.then(function(data){
  console.log(data[1])
}).catch(function(error) {
  console.log(error)
})
