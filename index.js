import express from "express";

const app = express()


app.get('/', (req,res) => {
    res.json({msg: "Hello jaswin"});

});


app.get('/', () =>{

});



app.post('/', () =>{

});


app.put('/:id', () =>{

});


app.delete('/:id', () =>{

});

app.listen(2810, () =>{
 console.log('The server is on port 2810')
});