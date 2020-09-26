const express=require('express')
const app=express()

const PORT=process.env.PORT || 4444

app.get('/',(req,res)=>{
    res.send('Hello World')
})

// Doing like this below
// i.e assigning port on our own does not work for heroku deployment
// we will have to host on the port which heroku allows us to do
/*app.listen(4444,(req,res)=>{
    console.log('started on http://localhost:4444')
})*/

app.listen(PORT,(req,res)=>{
    console.log(`started on http://localhost:${PORT}`)
})