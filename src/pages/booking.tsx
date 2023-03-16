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
    this.deleteTutorial = this.deleteTutorial.bind(this);

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

  onChangeNumberOfGuests(e: ChangeEvent<HTMLInputElement>) {
    const numberOfGuests = e.target.valueAsNumber;

    this.setState((prevState) => ({
      currentBooking: {
        ...prevState.currentBooking,
        numberOfGuests: numberOfGuests,
      },
    }));
  }

  onChangeTime(e: ChangeEvent<HTMLInputElement>) {
    const time = e.target.value;

    this.setState((prevState) => ({
      currentBooking: {
        ...prevState.currentBooking,
        time: time,
      },
    }));
  }

  getBooking(id: string) {
    BookingDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentBooking: response.data,
        });
        console.log(this.state.currentBooking._id);
      })
      .catch((e: Error) => {
        console.log(e);
        console.log(id)
      });
  }

  updatePublished(status: boolean) {
    const data: BookingsRestaurant = {
      _id: this.state.currentBooking._id,
      restaurantId: "6410c94250c6ca4f37fce84d",
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
      this.state.currentBooking,
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
        console.log(this.state.currentBooking._id)
      });
  }

  deleteTutorial() {
    BookingDataService.delete(this.state.currentBooking._id)
      .then((response: any) => {
        console.log(response.data);
        this.props.history.push("/");
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
            <form>
              <div className="form-group">
                <label htmlFor="title">Datum</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={this.state.currentBooking._id}
                  onChange={this.onChangeDate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Tid</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentBooking._id}
                  onChange={this.onChangeTime}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Gäster</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentBooking.numberOfGuests}
                  onChange={this.onChangeNumberOfGuests}
                />
              </div>
            </form>

            

            <button
              className="btn btn-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateBooking}
            >
              Update
            </button>
            <p>{this.state.message}</p>
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
