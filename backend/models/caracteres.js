import mongoose from "mongoose";


const caracteresSchema = mongoose.Schema( { 
    id: { 
        type: Number
    }, 
    caracter: { 
        type: String
    }, 
  
})

const caracteres = mongoose.model("Caracteres", caracteresSchema)

export default caracteres;



