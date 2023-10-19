import { NextApiRequest, NextApiResponse } from 'next';
import Confirmation, { IConfirmation } from '../../../models/Confirmation';

interface IResponse {
    Success: boolean;
    Message: string;
    Data?: IConfirmation[];
    Error?: boolean;
    Fields?: any;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponse>,
) {
    try {
        const { Confirm } = req.body;
        const Data = await Confirmation.find({ Confirmation: Confirm }).select(
            'Name Place Confirmation createdAt updatedAt',
        );

        res.status(200).json({
            Success: true,
            Message: '',
            Data,
            Error: false,
            Fields: {},
        });
    } catch (err: any) {
        res.status(500).json({ Success: false, Message: err.message || 'Internal server error!', Error: true });
    }
}