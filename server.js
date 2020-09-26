const express=require('express')

const {db,Tasks}=require('./db')

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT=process.env.PORT || 4444

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/tasks',async(req,res)=>{
    res.send(await Tasks.findAll())
})

app.post('/tasks',async (req,res)=>{
    res.send(await Tasks.create(req.body))
})

// Doing like this below
// i.e assigning port on our own does not work for heroku deployment
// we will have to host on the port which heroku allows us to do
/*app.listen(4444,(req,res)=>{
    console.log('started on http://localhost:4444')
})*/

/*app.listen(PORT,(req,res)=>{
    console.log(`started on http://localhost:${PORT}`)
})*/

db.sync().then(()=>{
    app.listen(PORT,(req,res)=>{
        console.log(`started on http://localhost:${PORT}`)
    })
})