import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookingSchema = new Schema({
    title: {
        type: String,
        required: 'Enter a title'
    },
    note: {
        type: String,
        required: 'Enter a note'
    },
    start: {
        type: Date,
        required: 'Enter start date and time'
    },
    end: {
        type: Date,
        required: 'Enter end date and time'
    }
});