import React from 'react';
import { Menu } from '../models/Menu';


export interface IVegetarianProps {}

const Vegetarian: React.FunctionComponent<IVegetarianProps> = (props) => {
  return (
  <>
  <main role="main" className="container">

<div className="starter-template mt-5">
  <h1>Vegitariskarätter</h1>
  <p className="lead">Vegitariskarätter</p>
</div>

{Menu.map((menu) => {
  if(menu.type.localeCompare("veg") === 0){
return <>
<img src={menu.imageURL}></img>
<h4>{menu.name}</h4>
<h4>{menu.price}:-</h4>
</>}
})};

</main>
  </>
  );
};

export default Vegetarian;