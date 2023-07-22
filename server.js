const express = require ("express")

const app = express()


app.get("/", (request, response) => {
    response.send({ hello: "class10"});
});

app.get("/order", (request, response)=> {
  response.send("Hi")
})

app.get("/order/counter", (request, response)=> {
  response.send(("Pic"))
})

app.get("/order/counter/list", (request, response) => {
  response.send("World")
})


app.listen(3000,()=> {
    console.log ("my app is listennig on port 3000")
})

