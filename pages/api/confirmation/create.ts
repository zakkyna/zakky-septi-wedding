import { NextApiRequest, NextApiResponse } from 'next';
import Confirmation, { IConfirmation } from '../../../models/Confirmation';
import dbConnect from '@/dbConnect';

interface ICreatePayload {
    Name: string;
    Place: string;
    Confirmation: string;
}

interface IResponse {
    Success: boolean;
    Message: string;
    Data?: IConfirmation;
    Error?: boolean;
    Fields?: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponse>,
) {
    try {
        const payload: ICreatePayload = req.body;
        await dbConnect();

        let Data = new Confirmation(payload);
        await Data.save();

        res.status(201).json({
            Success: true,
            Message: '',
            Data,
        });
    } catch (err: any) {
        if (err && err.name === 'ValidationError') {
            const error = err as { name: string; message: string; errors: any };
            return res.status(422).json({
                Error: true,
                Message: error.message,
                Fields: error.errors,
            } as IResponse);
        }
    }
}