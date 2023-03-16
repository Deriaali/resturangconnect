import React, {useEffect, useState} from 'react';
import { BookingsRestaurant } from '../interfaces/BookingsRestaurant';
import axios, {AxiosResponse} from 'axios';

export interface IAllBookingsProps {}

const AllBookings: React.FunctionComponent<IAllBookingsProps> = (props) => {
  const [bookingData, setBookingData] = useState<BookingsRestaurant[]>([]);

  useEffect(() => {
    axios.get<BookingsRestaurant>("https://school-restaurant-api.azurewebsites.net/booking/restaurant/6410c94250c6ca4f37fce84d")
    .then((response: AxiosResponse) => {
      console.log('Response', response.data)
    });
  }, []);

  return (
<>
</>
  );
}



export default AllBookings;
