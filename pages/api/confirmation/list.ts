import { NextApiRequest, NextApiResponse } from 'next';
import Confirmation, { IConfirmation } from '../../../models/Confirmation';
import dbConnect from '@/dbConnect';

interface IResponse {
    Success: boolean;
    Message: string;
    Data?: IConfirmation[];
    Error?: boolean;
    Fields?: any;
}

export default async function handler(
    _: NextApiRequest,
    res: NextApiResponse<IResponse>,
) {
    try {
        await dbConnect();
        const Data = await Confirmation.find()
            .sort({ createdAt: -1 })
            .select('Name Place Confirmation createdAt updatedAt');

        res.status(200).json({
            Success: true,
            Message: '',
            Data,
        });
    } catch (err: any) {
        res.status(500).json({ Success: false, Message: err.message || 'Internal server error!' });
    }
}