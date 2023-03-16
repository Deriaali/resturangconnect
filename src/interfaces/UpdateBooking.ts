export interface UpdateBooking {
  id?: any | null
  restaurantId: string
  date: string
  time: string
  numberOfGuests: number
  customerId: string,
  published?: boolean,
}
