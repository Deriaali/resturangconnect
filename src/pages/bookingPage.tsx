import { Component, ChangeEvent, useState } from "react";
import BookingDataService from "../services/resturant-connect.service";
import BookingCreate from "../interfaces/BookingCreate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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

private onChangeNumberOfGuests = (event: React.FormEvent<HTMLSelectElement>) => {
  const element = event.target as HTMLSelectElement;
  this.setState({ numberOfGuests: parseInt(element.value) });
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
        console.log(data)
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
      <div className="container col-8">
        {submitted ? (
          <div>
            <h4>Bokningen är nu genomförd</h4>
          </div>
        ) : (

          <>
                
                <div>
                  <div className="form-group">
                    <label htmlFor="date">Datum</label>
                    <input 
                    type="date" 
                    name="boka"
                    className="form-control"
                    onChange={this.onChangeDate}
                    />
                  </div>
                  


                  <div className="form-group">
                    <label htmlFor="time">Tid</label>
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
                      <option value="21:00">21:00</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests">Gäster</label>
                    <select
                      className="form-control"
                      id="guests"
                      required
                      value={numberOfGuests}
                      onChange={this.onChangeNumberOfGuests}
                      name="guests">
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

                  <button onClick={this.saveBooking} className="btn btn-success mb-3">
                    Boka
                  </button>
                </div></>
        )}
      </div>
      </>
      
    );
  }
}