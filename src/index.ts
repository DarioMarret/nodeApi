import "reflect-metadata";

import express, {json} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createConnection } from 'typeorm'

//import router 
import  userRouter  from './routes/user.routes'

const app = express()
createConnection()

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(json())

//routes
app.use(userRouter)


app.listen(3000)
console.log('Server on port 3000')