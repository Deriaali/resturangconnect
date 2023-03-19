import { Component, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { BookingsRestaurant } from "../interfaces/BookingsRestaurant";
import { UpdateBooking } from "../interfaces/UpdateBooking";

import BookingDataService from "../services/resturant-connect.service";

interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentBooking: BookingsRestaurant;
  message: string;
}

export default class Booking extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeNumberOfGuests = this.onChangeNumberOfGuests.bind(this);
    this.getBooking = this.getBooking.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateBooking = this.updateBooking.bind(this);
    this.deleteBooking = this.deleteBooking.bind(this);

    this.state = {
      currentBooking: {
        _id: null,
        restaurantId: "",
        date: "",
        time: "",
        numberOfGuests: 0,
        customerId: "",
        published: false,
      },
      message: "",
    };
  }

  

  componentDidMount() {
    this.getBooking(this.props.match.params.id);
  }

  getBooking(id: string) {
    BookingDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentBooking: response.data[0],
        });
        console.log(response.data[0])
      })
      .catch((e: Error) => {
        console.log(e);
        console.log(id)
      });
  }

  onChangeDate(e: ChangeEvent<HTMLInputElement>) {
    const date = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBooking: {
          ...prevState.currentBooking,
          date: date,
        },
      };
    });
  }

  onChangeNumberOfGuests(e: ChangeEvent<HTMLSelectElement>) {
    const numberOfGuests = e.target.value;

    this.setState(prevState => ({
      currentBooking: {
        ...prevState.currentBooking, // <-- copy other nested state
        numberOfGuests: parseInt(numberOfGuests),
      },
    }));
  }

  onChangeTime(e: ChangeEvent<HTMLSelectElement>) {
    const time = e.target.value;

    this.setState((prevState) => ({
      currentBooking: {
        ...prevState.currentBooking,
        time: time,
      },
    }));
  }


  updatePublished(status: boolean) {
    const data: BookingsRestaurant = {
      _id: this.state.currentBooking._id,
      restaurantId: this.state.currentBooking.restaurantId,
      date: this.state.currentBooking.date,
      time: this.state.currentBooking.time,
      numberOfGuests: this.state.currentBooking.numberOfGuests,
      customerId: this.state.currentBooking.customerId,
      published: status,
    };

    BookingDataService.update(data, this.state.currentBooking._id)
      .then((response: any) => {
        this.setState((prevState) => ({
          currentBooking: {
            ...prevState.currentBooking,
            published: status,
          },
          message: "The status was updated successfully!"
        }));
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updateBooking() {
    BookingDataService.update(
      {
        "id": this.state.currentBooking._id,
        "restaurantId": this.state.currentBooking.restaurantId,
        "date": this.state.currentBooking.date,
        "time": this.state.currentBooking.time,
        "numberOfGuests":this.state.currentBooking.numberOfGuests,
        "customerId": this.state.currentBooking.customerId
      },
      this.state.currentBooking._id
    )
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          message: "Bokningen uppdaterades",
        });
      })
      .catch((e: Error) => {
        console.log(e);
        console.log(this.state.currentBooking)
      });
  }

  deleteBooking() {
    BookingDataService.delete(this.state.currentBooking._id)
      .then((response: any) => {
        console.log(response.data);
        this.props.history.push("/admin");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { currentBooking } = this.state;

    return (
      <div>
        {currentBooking ? (
          <div className="edit-form">
            <h4>Uppdatera bokning</h4>
            <br></br>
            <p className="text-success">{this.state.message}</p>
            <form>
              <div className="form-group">
                <label htmlFor="title">Datum:</label>
                <input
                  type="date"
                  className="form-control"
                  id="title"
                  value={currentBooking.date}
                  onChange={this.onChangeDate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Tid:</label>
                <select
                      className="custom-select"
                      id="time"
                      required
                      onChange={this.onChangeTime}
                      value={currentBooking.time}
                      name="time"
                    >
                      <option value="18:00">18:00</option>
                      <option value="21:00">21:00</option>
                    </select>
              </div>

              <div className="form-group">
                <label htmlFor="Antal personer">Antal personer:</label>
                <select
                  className="form-control"
                  id="description"
                  value={currentBooking.numberOfGuests}
                  onChange={this.onChangeNumberOfGuests}
                >

                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                </select>
              </div>
            </form>

            <button
              type="submit"
              className="btn btn-success  mr-2"
              onClick={this.updateBooking}
            >
              Uppdatera
            </button>

            <button
              className="btn btn-danger"
              onClick={this.deleteBooking}
            >
              Radera
            </button>
          </div>
        ) : (
          <div>
            <br />
            <p>Vänligen välj en bokning för att ändra</p>
          </div>
        )}
      </div>
    );
  }
}