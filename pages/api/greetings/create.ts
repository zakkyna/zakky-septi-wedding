import { NextApiRequest, NextApiResponse } from 'next';
import Greeting, { IGreeting } from '../../../models/Greeting';
import dbConnect from '@/dbConnect';

interface IResponse {
    Success: boolean;
    Message: string;
    Data?: IGreeting;
    Error?: boolean;
    Fields?: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponse>,
) {
    try {
        const payload = req.body;
        await dbConnect();

        let Data = new Greeting(payload);
        await Data.save();

        res.status(201).json({
            Success: true,
            Message: '',
            Data,
        });
    } catch (err: any) {
        if (err && err.name === 'ValidationError') {
            return res.status(422).json({
                Success: false,
                Error: true,
                Message: err.message,
                Fields: err.errors,
            });
        }
        res.status(500).json({ Success: false, Message: err.message || 'Internal server error!' });
    }
}