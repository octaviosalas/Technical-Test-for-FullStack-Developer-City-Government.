import mongoose from "mongoose";


const actividadesSchema = mongoose.Schema({ 
    id: { 
        type: Number
    }, 
    codigo: { 
        type: Number
    }, 
    descripcion: { 
        type: String
    },    
})

const actividades = mongoose.model("actividades", actividadesSchema)

export default actividades;



