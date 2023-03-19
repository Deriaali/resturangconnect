import React from 'react';
import { Link, Route } from 'react-router-dom';




export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
  <>
  <main role="main" className="container">

<div className="starter-template mt-5 homeDiv">
  <h1>Resturant Connect</h1>
  <p className="lead">Välkommen</p>
</div>

</main>
  </>
  );
};

export default HomePage;