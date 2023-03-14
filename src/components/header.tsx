import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Resturant Connect</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/"><a className="nav-link" href="#">Hem <span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item active">
          <Link to="/boka"><a className="nav-link" href="#">Boka<span className="sr-only">(current)</span></a></Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Meny</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
            <Link to="/efterätter"><a className="dropdown-item" href="#">Efterätter</a></Link>
            <Link to="/förätter"><a className="dropdown-item" href="#">Förrätter</a></Link>
            <Link to="/varmrätter"><a className="dropdown-item" href="#">Varmrätter</a></Link>
            <Link to="/vegetarisk"><a className="dropdown-item" href="#">Vegetarisk</a></Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Header;
