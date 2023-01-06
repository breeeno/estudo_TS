import { Request, Response } from "express"
import EmailService from "../services/EmailService";

const users = [
    {
        id: 1,
        nome: "breno",
        email: "teste@teste.com"
    },
    {
        id: 2,
        nome: "breno2",
        email: "teste@teste.com"
    },
    {
        id: 3,
        nome: "breno3",
        email: "teste@teste.com"
    },
    {
        id: 4,
        nome: "breno4",
        email: "teste@teste.com"
    },
    {
        id: 5,
        nome: "breno5",
        email: "teste@teste.com"
    }
] 

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },
    async create (req: Request, res: Response){
        const email_service = new EmailService();
        email_service.sendMail({
            to: { name: "breno", email: "breno@teste.com"}, 
            message: { subject: "teste testante", body:"teste"} 
    });
        return res.json("email enviado")

    },
};
