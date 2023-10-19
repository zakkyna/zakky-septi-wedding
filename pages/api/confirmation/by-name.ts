import { NextApiRequest, NextApiResponse } from 'next';
import Confirmation, { IConfirmation } from '../../../models/Confirmation';

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
        const { Name } = req.body;
        let strCapitalize = Name.toLowerCase().replace(
            /\b[a-z]/g,
            function (letter: string) {
                return letter.toUpperCase();
            },
        );

        const Data = await Confirmation.findOne({
            Name: { $regex: strCapitalize },
        })
            .select('Name Place Confirmation createdAt updatedAt')
            .lean()
            .exec();

        if (Data === null) {
            res.status(404).json({
                Success: false,
                Message: 'Confirmation not found',
            });
        } else {
            res.status(200).json({
                Success: true,
                Message: '',
                Data: Data as IConfirmation,
            });
        }
    } catch (err: any) {
        res.status(500).json({ Success: false, Message: err.message || 'Internal server error!' });
    }
}