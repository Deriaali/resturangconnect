import { Component, ChangeEvent } from "react";
import RestaurantDataService from "../services/resturant-connect.service";
import { Link } from "react-router-dom";
import { BookingsRestaurant } from "../interfaces/BookingsRestaurant";

type Props = {};

type State = {
  bookings: Array<BookingsRestaurant>,
  currentBooking: BookingsRestaurant | null,
  currentIndex: number,
  searchName: string
};


export default class Admin extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveBookings = this.retrieveBookings.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBookings = this.setActiveBookings.bind(this);

    this.state = {
      bookings: [],
      currentBooking: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveBookings();
  }

  onChangeSearchName(e: ChangeEvent<HTMLInputElement>) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveBookings() {
    RestaurantDataService.getAll()
      .then((response: any) => {
        this.setState({
          bookings: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveBookings();
    this.setState({
      currentBooking: null,
      currentIndex: -1
    });
  }

  setActiveBookings(booking: BookingsRestaurant, index: number) {
    this.setState({
      currentBooking: booking,
      currentIndex: index
    });
  }

  searchTitle() {
    this.setState({
      currentBooking: null,
      currentIndex: -1
    });
  }
  render() {
    const {bookings, currentBooking, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Alla Bokningar</h4>

          <ul className="list-group">
            {bookings &&
              bookings.map((bookings: BookingsRestaurant, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveBookings(bookings, index)}
                  key={index}
                >
                  {bookings.date}
                  
                </li>
              ))}
              
          </ul>

        </div>
        <div className="col-md-6">
          {currentBooking ? (
            <div>
              <h4>Bokning:</h4>
              <div>
                <label>
                  <strong>Tid:</strong>
                </label>{" "}
                {currentBooking.time}
              </div>
              <div>
                <label>
                  <strong>Gäster:</strong>
                </label>{" "}
                {currentBooking.numberOfGuests}
              </div>

              <div>
                <label>
                  <strong>id:</strong>
                </label>{" "}
                {currentBooking._id}
              </div>


              <Link
                to={"/booking/"+currentBooking._id}
                className="btn btn-warning"
              >
                Ändra
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Vänligen välj en bokning för att ändra</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
