export interface BookingsRestaurant {
  _id?: any | null
  restaurantId: string
  date: string
  time: string
  numberOfGuests: number
  customerId: string
  published?: boolean,
}
