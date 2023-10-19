import { NextApiRequest, NextApiResponse } from 'next';
import Greeting, { IGreeting } from '../../../models/Greeting';
import dbConnect from '@/dbConnect';

interface IResponse {
    Success: boolean;
    Message: string;
    Data?: IGreeting[];
    Error?: boolean;
    Fields?: any;
}

export default async function handler(
    _: NextApiRequest,
    res: NextApiResponse<IResponse>,
) {
    try {
        await dbConnect();
        const Data = await Greeting.find()
            .sort({ createdAt: -1 })
            .select('Name Greeting Color createdAt updatedAt');

        res.status(200).json({
            Success: true,
            Message: '',
            Data,
        });
    } catch (err: any) {
        res.status(500).json({ Success: false, Message: err.message || 'Internal server error!' });
    }
}