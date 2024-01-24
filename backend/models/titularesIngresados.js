import mongoose from "mongoose";


const titularesIngresadosSchema = mongoose.Schema( { 
    id: { 
        type: Number
    }, 
    operacion_id: { 
        type: Number
    }, 
    caracter_id: { 
        type: Number
    }, 
    cuit_titular: { 
        type: Number,
    }, 
    razon_social: { 
        type: String
    },
  


})

const TitularesIngresados = mongoose.model("TitularesIngresados", titularesIngresadosSchema)

export default TitularesIngresados;

