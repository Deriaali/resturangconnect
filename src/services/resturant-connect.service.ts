import http from "../http-common";
import  BookingCreate from "../interfaces/BookingCreate";
import { BookingsRestaurant } from "../interfaces/BookingsRestaurant";
import { UpdateBooking } from "../interfaces/UpdateBooking";

class RestaurantDataService {
  getAll() {
    return http.get<Array<BookingsRestaurant>>("/booking/restaurant/6410c94250c6ca4f37fce84d");
  }

  get(id: string) {
    return http.get<BookingsRestaurant>(`/booking/${id}`);
  }

  create(data: BookingCreate) {
    return http.post<BookingCreate>("/booking/create", data);
  }

  update(data: UpdateBooking, id: any) {
    return http.put<any>(`/booking/update/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/booking/delete/${id}`);
  }

}

export default new RestaurantDataService();