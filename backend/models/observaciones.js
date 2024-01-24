import mongoose from "mongoose";


const observacionesSchema = mongoose.Schema( { 
    id: { 
        type: Number
    }, 
    operacion_id: { 
        type: Number
    }, 
    observacion: { 
        type: Number
    }, 
})

const observaciones = mongoose.model("Observaciones", observacionesSchema)

export default observaciones;

