import { Request, Response } from 'express'
import { getRepository } from 'typeorm' 
import { User } from '../entity/User'

// export const validarUser = async(req: Request, res: Response): Promise<Response>=>{
//     const rest = await getRepository(User).find(req.body);
//     return res.json(rest);
// }; 

export const validarUser  = async(req: Request, res: Response): Promise<Response>=>{
    const user = await getRepository(User).findOne({nombre: req.params.nombre, password: req.params.password});
    console.log(user)
    return res.json(user)
};

// para actualizar
// export const updateUser  = async(req: Request, res: Response): Promise<Response>=>{
//     const user = await getRepository(User).findOne(req.params.id);
//     if(user){
//         getRepository(User).merge(user, req.body);
//         const rest = await getRepository(User).save(user);
//         return res.json(rest);
//     }
//     return res.json({
//         msg:'User no incontrado'
//     })
// };