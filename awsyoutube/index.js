let express = require("express")
let app = express()
app.get("/",(req,res)=>{
    res.end("Hello world")
    
})

let server=app.listen(400,()=>{
    console.log(server.address().port)
})
