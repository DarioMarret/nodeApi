import { Router } from 'express'
const router = Router()
import { validarUser } from '../controllers/validar.controller'
import {createUsers, deleteuser, getUsers, updateUser, userById} from '../controllers/user.controller'


router.get('/users', getUsers)
router.post('/users', createUsers)
router.get('/users/:id', userById)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteuser)


router.post('/validar/:nombre/:password', validarUser)

export default router;
