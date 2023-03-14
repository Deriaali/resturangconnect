import React from 'react';


export interface IVegetarianProps {}

const Vegetarian: React.FunctionComponent<IVegetarianProps> = (props) => {
  return (
  <>
  <main role="main" className="container">

<div className="starter-template mt-5">
  <h1>Vegitariskarätter</h1>
  <p className="lead">Vegitariskarätter</p>
</div>

</main>
  </>
  );
};

export default Vegetarian;