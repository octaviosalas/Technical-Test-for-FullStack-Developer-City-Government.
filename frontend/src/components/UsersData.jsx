import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'

const UsersData = () => { 

    const [activities, setActivities] = useState([])
    const [characters, setCharacters] = useState([])
    const [conditions, setConditions] = useState([])
    const [addresses, setAddresses] = useState([])
    const [ingresedActivities, setIngresedActivities] = useState([])
    const [holdersEntered, setHoldersEntered] = useState([])
    const [orderedData, setOrderedData] = useState([]);
   
    useEffect(() => { 
        axios.get("http://localhost:4000/getAllData")
             .then((res) => { 
                const data = res.data
                setActivities(data.actividades)
                setCharacters(data.caracteresTodos)
                setConditions(data.condicionesTodas)
                setAddresses(data.domiciliosTodos)
                setHoldersEntered(data.titularesIngresados)
                setIngresedActivities(data.actividadesIngresadas)
             })
             .catch((err) => { 
                console.log(err)
             })
    }, [])

    const getResults = (activities, characters, conditions, addresses, holdersEntered, ingresedActivities) => { 
        const getFirstData = addresses.map((ad) => { 
            const filterHoldersEntered = holdersEntered.filter((hold) => hold.operacion_id === ad.id)
            const caracterValue = filterHoldersEntered.map((cc) => cc.caracter_id)[0]
            const caracterRealValue = characters.filter((cc) => cc.id === caracterValue).map((c) => c.caracter)[0]
            const getActivitie = ingresedActivities.filter((actv) => actv.operacion_id === ad.id)
            const activitieValue = getActivitie.map((a) => a.actividad_id)[0]
            const activitieRealValue = activities.filter((ac) => ac.codigo === activitieValue).map((a) => ({ codigo: a.codigo, descripcion: a.descripcion }))[0];
            const condicion = ad.condicion_id
            const getRealCondicion = conditions.filter((cc) => cc.id === condicion).map((c) => c.condicion)[0]
            return { 
                usuarioId: ad.id,
                cuit: ad.cuit,
                cuit_rep: ad.cuit_representado,
                domicilio: ad.domicilio,
                telefono: ad.telefono,
                tipoTelefono: ad.tipo_telefono,
                codigoActividad: activitieRealValue.codigo,
                valorActividad:  activitieRealValue.descripcion,
                caracter: caracterRealValue,
                condicion: getRealCondicion
            }
        })
        return getFirstData
    } 

    useEffect(() => {
        const resultadosObtenidos = getResults(activities, characters, conditions, addresses, holdersEntered, ingresedActivities);
        setOrderedData(resultadosObtenidos);
      }, [activities, characters, conditions, addresses, holdersEntered, ingresedActivities]);

    return (
        <div>
            <div className=' max-h-[400px] overflow-y-auto'>
        {orderedData.length !== 0 ? (
            <table className="border-collapsed w-full mt-4 ">
            <thead className=''>
                <tr>
                <th className="border p-2">Cuit</th>
                <th className="border p-2">Cuit_rep</th>
                <th className="border p-2">Domicilio</th>
                <th className="border p-2">Teléfono</th>
                <th className="border p-2">Actividad</th>
                <th className="border p-2">Caracter</th>
                <th className="border p-2">Condición</th>
                </tr>
            </thead>
            <tbody>
                {orderedData.map((ord) => (
                <tr key={ord.usuarioId} className="border">
                    <td className="border p-2">{ord.cuit}</td>
                    <td className="border p-2">{ord.cuit_rep}</td>
                    <td className="border p-2">{ord.domicilio}</td>
                    <td className="border p-2"> {ord.tipoTelefono} <br /> {ord.telefono}</td>
                    <td className="border p-2">{ord.codigoActividad}  <br /> {ord.valorActividad}</td>
                    <td className="border p-2">{ord.caracter}</td>
                    <td className="border p-2">{ord.condicion}</td>
                </tr>
                ))}
            </tbody>
            </table>
        ) : (
            <p>Cargando...</p>
        )}
        </div>
            
        </div>
    )
    }

    export default UsersData
