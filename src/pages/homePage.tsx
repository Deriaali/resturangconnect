import React from 'react';


export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
  <>
  <main role="main" className="container">

<div className="starter-template mt-5">
  <h1>Första Sida</h1>
  <p className="lead">Första sidan</p>
</div>

</main>
  </>
  );
};

export default HomePage;