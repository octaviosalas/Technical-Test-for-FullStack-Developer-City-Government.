import express from "express"
import cors from "cors"
import connectDataBase from "./database/connectDataBase.js"
import appRoutes from "./routes/appRoutes.routes.js"
import bodyParser from "body-parser"

const app = express()
const PORT = 4000

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

app.use(appRoutes)


app.get('/', (req, res) => {
    res.send('Bienvenidos a tu Servidor de Ensolvers TEST!!!!!!!!')
  })
  

app.listen(PORT, () => {
     console.log("Servidor de NodeJs/Express iniciado en el puerto 4000 ✔✔")
     connectDataBase() 
})