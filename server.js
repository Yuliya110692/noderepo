const express = require ("express")

const app = express()


app.get("/", (req, res) => {
    res.send({ hello: "class10"});
});


app.listen(3000,()=> {
    console.log ("my app is listennig on port 3000")
})