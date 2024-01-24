import mongoose from "mongoose";


const domiciliosSchema = mongoose.Schema( { 
    id: { 
        type: Number
    }, 
    cuit: { 
        type: Number
    }, 
    cuit_representado: { 
        type: Number
    }, 
    partida: { 
        type: Number,
    }, 
    domicilio: { 
        type: String
    },
    fecha_operacion: { 
        type: String
    },
    condicion_id: { 
        type: Number
    },
    telefono: { 
        type: Number
    },
    tipo_telefono: { 
        type: String
    }

  


})

const Domicilios = mongoose.model("Domicilios", domiciliosSchema)

export default Domicilios;


