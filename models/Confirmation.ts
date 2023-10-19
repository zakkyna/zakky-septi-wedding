import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IConfirmation extends Document {
    Name: string;
    Place: string;
    Confirmation: string;
}

let Confirmation: Model<IConfirmation>;

try {
    Confirmation = mongoose.model<IConfirmation, Model<IConfirmation>>(
        'Confirmation',
    );
} catch {
    const confirmSchema: Schema = new mongoose.Schema(
        {
            Name: {
                type: String,
                required: [true, 'Name must be filled!'],
            },
            Place: {
                type: String,
                required: [true, 'Place must be filled!'],
            },
            Confirmation: {
                type: String,
                required: [true, 'Confirmation must be filled!'],
            },
        },
        { timestamps: true },
    );

    Confirmation = mongoose.model<IConfirmation>('Confirmation', confirmSchema);
}

export default Confirmation;