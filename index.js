import express from "express";

import jkroutes from "./routes/jk.route.js"
import connectdb from "./library/db.js";

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true}));



connectdb();


app.get('/', (req,res) => {
    res.json({msg: "Hello jaswin"});

});

app.use("/jk" , jkroutes);



app.listen(2810, () =>{
 console.log('The server is on port 2810')
});