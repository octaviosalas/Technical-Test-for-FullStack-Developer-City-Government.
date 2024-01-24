import mongoose from "mongoose";


const condicionSchema = mongoose.Schema( { 
    id: { 
        type: Number
    }, 
    condicion: { 
        type: String
    }, 
  
})

const condicion = mongoose.model("Condicion", condicionSchema)

export default condicion;



