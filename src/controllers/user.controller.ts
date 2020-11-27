import { Request, Response } from 'express'
import { getRepository } from 'typeorm' 
import { User } from '../entity/User'

//consultado toda la tabla
export const getUsers = async(req: Request, res: Response): Promise<Response>=>{
    const rest = await getRepository(User).find();
    return res.json(rest);
}; 
//creando usuario
export const createUsers = async(req: Request, res: Response): Promise<Response>=>{
    const newUser = getRepository(User).create(req.body);
    const rest = await getRepository(User).save(newUser);
    return res.json(rest);
};
//busqueda por id 
export const userById = async(req: Request, res: Response): Promise<Response>=>{
    const userId = await getRepository(User).findOne(req.params.id);
    return res.json(userId);
};
//para actualizar
export const updateUser  = async(req: Request, res: Response): Promise<Response>=>{
    const user = await getRepository(User).findOne(req.params.id);
    if(user){
        getRepository(User).merge(user, req.body);
        const rest = await getRepository(User).save(user);
        return res.json(rest);
    }
    return res.json({
        msg:'User no incontrado'
    })
};
// eliminar usuario por Id
export const deleteuser = async(req:Request, res:Response):Promise<Response>=>{
    const rest = await getRepository(User).delete(req.params.id);
    return res.json(rest);
}
