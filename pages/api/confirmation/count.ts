import { NextApiRequest, NextApiResponse } from 'next';
import Confirmation, { IConfirmation } from '../../../models/Confirmation';

interface ICountConfirmation {
    Hadir: number;
    TidakHadir: number;
    Total: number;
}

interface ICountPayload {
    Pemalang: ICountConfirmation;
    Bekasi: ICountConfirmation;
    Total_All: number;
}

interface IResponse {
    Success: boolean;
    Message: string;
    Data?: ICountPayload;
    Error?: boolean;
    Fields?: any;
}

export default async function handler(
    _: NextApiRequest,
    res: NextApiResponse<IResponse>,
) {
    try {
        let count_confirm_pml: ICountConfirmation = {
            Hadir: await Confirmation.find({ Place: 'pml' }).countDocuments({
                Confirmation: 'Hadir',
            }),
            TidakHadir: await Confirmation.find({ Place: 'pml' }).countDocuments({
                Confirmation: 'Tidak Hadir',
            }),
            Total: await Confirmation.find({ Place: 'pml' }).countDocuments(),
        };

        let count_confirm_bks: ICountConfirmation = {
            Hadir: await Confirmation.find({ Place: 'bks' }).countDocuments({
                Confirmation: 'Hadir',
            }),
            TidakHadir: await Confirmation.find({ Place: 'bks' }).countDocuments({
                Confirmation: 'Tidak Hadir',
            }),
            Total: await Confirmation.find({ Place: 'bks' }).countDocuments(),
        };

        const payload: ICountPayload = {
            Pemalang: count_confirm_pml,
            Bekasi: count_confirm_bks,
            Total_All: await Confirmation.find().countDocuments(),
        };

        res.status(200).json({
            Success: true,
            Message: '',
            Data: payload,
        });
    } catch (err: any) {
        res.status(500).json({ Success: false, Message: err.message || 'Internal server error!' });
    }
}