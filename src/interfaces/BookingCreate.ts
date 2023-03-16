export default interface BookingCreate {
  restaurantId?: any | null
  date: string
  time: string
  numberOfGuests: number
  customer: Customer,
  published?: boolean,
}

export interface Customer {
  name: string
  lastname: string
  email: string
  phone: string
}