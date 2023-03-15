const express = require('express');
const Event = require('./models/event');
require('./config/connect');


const app = express();
app.use(express.json());



/*
app.post('/add',(req, res)=>{
    data = req.body;
    evnt = new Event(data);
    evnt.save() 
});
*/


app.post('/add', async(req,res)=>{
    try{
        data = req.body;
        evnt = new Event(data);
        savedEvent = await evnt.save();
        res.save(savedEvent);
    } catch(error){
        res.send(error)
    }
})


app.listen(3000, ()=>{
    console.log('server works');
});