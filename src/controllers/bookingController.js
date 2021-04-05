import mongoose from 'mongoose';
import { BookingSchema } from '../models/bookingModel';

const Booking = mongoose.model('Booking', BookingSchema);

export const addNewBooking = (req, res) => {
    let newBooking = new Booking(req.body);

    newBooking.save((err, booking) => {
        if(err){
            res.send(err);
        }
        res.json(booking);
    })
}

export const getBookings = (req, res) => {
    Booking.find({}, (err, booking) =>{
        if(err){
            res.send(err);
        }
        res.json(booking);
    })
}

export const getBookingWithID = (req, res) => {
    Booking.findById(req.params.bookingID, (err, booking) =>{
        if(err){
            res.send(err);
        }
        res.json(booking);
    })
}

export const updateBooking = (req, res) => {
    Booking.findOneAndUpdate({_id: req.params.bookingID}, req.body, { new: true, useFindAndModify: false }, (err, booking) =>{
        if(err){
            res.send(err);
        }
        res.json(booking);
    })
}

export const deleteBooking = (req, res) => {
    Booking.remove({_id: req.params.bookingID}, (err, booking) =>{
        if(err){
            res.send(err);
        }
        res.json({ message: 'successfully deleted booking'});
    })
}

//returns all the bookings that were created on a specific date
export const getBookingByDate = (req, res) => {
    Booking.find({start: {$gt: req.params.bookingDate}}, (err, booking) => {
        if(err){
            res.send(err);
        }
        res.json(booking);
    })
}
