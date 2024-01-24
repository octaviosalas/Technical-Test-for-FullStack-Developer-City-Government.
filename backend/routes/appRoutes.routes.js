import express from 'express';
const appRoutes = express.Router();
import {getAllDataModels} from "../controllers/gralContoller.js"

appRoutes.get('/getAllData', getAllDataModels);

export default appRoutes;