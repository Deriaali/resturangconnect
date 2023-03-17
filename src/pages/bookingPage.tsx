import { Component, ChangeEvent, useState } from "react";
import BookingDataService from "../services/resturant-connect.service";
import BookingCreate from "../interfaces/BookingCreate";


type Props = {};

type State = BookingCreate & {
  submitted: boolean
};


export default class BookingPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeNumberOfGuests = this.onChangeNumberOfGuests.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.saveBooking = this.saveBooking.bind(this);
    this.newBooking = this.newBooking.bind(this);



    this.state = {
      restaurantId: null,
      date: "",
      time: "",
      numberOfGuests: 0,
      customer: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
      },
      published: false,
      submitted: false
    };
  }

  onChangeDate(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      date: e.target.value
    });
  }

  private onChangeTime = (event: React.FormEvent<HTMLSelectElement>) => {
    const element = event.target as HTMLSelectElement;
    this.setState({ time: element.value });
}

  onChangeNumberOfGuests(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      numberOfGuests: e.target.valueAsNumber
    });
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ customer: { ...this.state.customer, name: e.target.value} });
  }

  onChangeLastName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ customer: { ...this.state.customer, lastname: e.target.value} });
  }

  onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ customer: { ...this.state.customer, email: e.target.value} });
  }

  onChangePhone(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ customer: { ...this.state.customer, phone: e.target.value} });
  }

  saveBooking() {
    const data: BookingCreate = {
      restaurantId: "6410c94250c6ca4f37fce84d",
      date: this.state.date,
      time: this.state.time,
      numberOfGuests: this.state.numberOfGuests,
      customer: {
        name: this.state.customer.name,
        lastname: this.state.customer.lastname,
        email: this.state.customer.email,
        phone: this.state.customer.phone,
      }

    };

    BookingDataService.create(data)
      .then((response: any) => {
        this.setState({
          restaurantId: "6410c94250c6ca4f37fce84d",
          date: this.state.date,
          time: this.state.time,
          numberOfGuests: this.state.numberOfGuests,
          customer: {
            name: this.state.customer.name,
            lastname: this.state.customer.lastname,
            email: this.state.customer.email,
            phone: this.state.customer.phone,
          },
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
        console.log(data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newBooking() {
    this.setState({
      restaurantId: null,
      date: "",
      time: "",
      numberOfGuests: 0,
      customer: {
        name: "",
        lastname: "",
        email: "",
        phone: "",
      },
      published: false,
      submitted: true
    });
  }
  

  render() {
    const { submitted, date, time, numberOfGuests, customer } = this.state;

    return (
      <>
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBooking}>
              Add
            </button>
          </div>
        ) : (

          <>
                
                <div>
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="date"
                      required
                      value={date}
                      onChange={this.onChangeDate}
                      name="date" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <select
                      className="custom-select"
                      id="time"
                      required
                      value={time}
                      onChange={this.onChangeTime}
                      name="time"
                    >
                      <option value=""></option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests">Gäster</label>
                    <input
                      type="number"
                      className="form-control"
                      id="guests"
                      required
                      value={numberOfGuests}
                      onChange={this.onChangeNumberOfGuests}
                      name="guests" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Namn</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={customer.name}
                      onChange={this.onChangeName}
                      name="name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastname">Efternamn</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      required
                      value={customer.lastname}
                      onChange={this.onChangeLastName}
                      name="lastname" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">E-post</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      required
                      value={customer.email}
                      onChange={this.onChangeEmail}
                      name="email" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Telefon</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      required
                      value={customer.phone}
                      onChange={this.onChangePhone}
                      name="phone" />
                  </div>

                  <button onClick={this.saveBooking} className="btn btn-success">
                    Submit
                  </button>
                </div></>
        )}
      </div>
      </>
      
    );
  }
}