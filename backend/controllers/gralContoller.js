import actividades from "../models/actividades.js";
import actividadesIngresadas from "../models/actividadesIngresadas.js"
import caracteres from "../models/caracteres.js";
import condicion from "../models/condicion.js"
import Domicilios from "../models/domicilios.js"
import TitularesIngresados from "../models/titularesIngresados.js"

export const getAllDataModels = async (req, res) => {
    try {
        const actividadesData = await actividades.find();
        const actividadesIngresadasData = await actividadesIngresadas.find();
        const titularesIngresadosData = await TitularesIngresados.find();
        const domiciliosData = await Domicilios.find();
        const condicionesData = await condicion.find();
        const caracteresData = await caracteres.find();

        res.status(200).json({
            actividades: actividadesData,
            actividadesIngresadas: actividadesIngresadasData,
            titularesIngresados: titularesIngresadosData,
            domiciliosTodos: domiciliosData,
            condicionesTodas: condicionesData,
            caracteresTodos: caracteresData
        });
    } catch (error) {
        console.error("Error al obtener datos de modelos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};


  