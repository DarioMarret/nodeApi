import { Router } from 'express'
const validarRouter = Router()

import { validarUser } from '../controllers/validar.controller'

validarRouter.post('/validar', validarUser)

export default validarRouter;