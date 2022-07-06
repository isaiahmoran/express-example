import { Request, Response } from 'express';

const ping = ((req: Request, res: Response) => {
    res.json({ping: 'pong'})
})

export default module.exports = {
    ping
}