import React from 'react';

export interface IBookingProps {}

const BookingPage: React.FunctionComponent<IBookingProps> = (props) => {
  return (
    <div className='container'>
      <h1>Boka</h1>
     <form className="was-validated mt-4">

  <div className="form-group">
  <label htmlFor="validationTooltip01">Datum</label>
  <input type="text" className="form-control" id="validationTooltip01" placeholder="Datum" required />
  </div>

  <div className="form-group">
  <label htmlFor="validationTooltip01">Tid</label>
    <select className="custom-select" required>
      <option value=""></option>
      <option value="1">10:00</option>
      <option value="2">10:30</option>
      <option value="3">11:00</option>
    </select>
  </div>

  <div className="form-group">
  <label htmlFor="validationTooltip01">Antal gäster</label>
    <select className="custom-select" required>
      <option value=""></option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="3">4</option>
    </select>
  </div>

  <div className="form-group">
  <label htmlFor="validationTooltip01">Namn</label>
  <input type="text" className="form-control" id="validationTooltip01" placeholder="Förnamn" required />
  </div>

  <div className="form-group">
  <label htmlFor="validationTooltip01">Efternamn</label>
  <input type="text" className="form-control" id="validationTooltip01" placeholder="Efternamn" required />
  </div>

  <div className="form-group">
  <label htmlFor="validationTooltip01">E-post</label>
  <input type="email" className="form-control" id="validationTooltip01" placeholder="E-post" required />
  </div>

  <div className="form-group">
  <label htmlFor="validationTooltip01">Telefon</label>
  <input type="tel" className="form-control" id="validationTooltip01" placeholder="Telefon" required />
  </div>
</form>
    </div>
  );
}



export default BookingPage;
