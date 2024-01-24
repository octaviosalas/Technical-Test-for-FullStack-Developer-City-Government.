import mongoose from "mongoose";


const actividadesIngresadasSchema = mongoose.Schema( { 
    id: { 
        type: Number
    }, 
    operacion_id: { 
        type: Number
    }, 
    actividad_id: { 
        type: Number
    }, 
    principal: { 
        type: Number,
    }, 
})

const actividadesIngresadas = mongoose.model("actividadesIngresadas", actividadesIngresadasSchema)

export default actividadesIngresadas;



