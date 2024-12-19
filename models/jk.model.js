import { model, Schema } from "mongoose";

const schema = new Schema({
   tittle: {
    type: String,
    required : true,
    unique: true,
},
   desc: {
   
    type: String,
    required : true,
   
},
    

    
    
});


const file = model("file", schema);


export default file ;