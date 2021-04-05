import {
  addNewBooking,
  getBookings,
  getBookingWithID,
  updateBooking,
  deleteBooking,
  getBookingByDate
} from "../controllers/bookingController";

const routes = app => {
  //basic route to api
  app
    .route("/booking")
    .get((req, res, next) => {
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getBookings)

    //add a booking
    .post(addNewBooking);

  app
  .route("/booking/:bookingDate")
     //get a booking by date
     .get(getBookingByDate)

  //route to api with booking id sent
  app
    .route("/booking/:bookingID")

    //get a booking
    .get(getBookingWithID)

    //update a booking
    .put(updateBooking)

    //delete a booking
    .delete(deleteBooking);
};

export default routes;
