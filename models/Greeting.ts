import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IGreeting extends Document {
    Name: string;
    Greeting: string;
    Color: string;
}

let Greeting: Model<IGreeting>;

try {
    Greeting = mongoose.model<IGreeting, Model<IGreeting>>('Greetings');
} catch {
    const greetingSchema: Schema = new mongoose.Schema(
        {
            Name: {
                type: String,
                required: [true, 'Name must be filled!'],
            },
            Greeting: {
                type: String,
                required: [true, 'Greeting must be filled!'],
            },
            Color: {
                type: String,
                required: [true, 'Color must be filled!'],
            },
        },
        { timestamps: true },
    );

    Greeting = mongoose.model<IGreeting>('Greetings', greetingSchema);
}

export default Greeting;