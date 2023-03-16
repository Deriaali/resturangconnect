import React from 'react';
import { Menu } from '../models/Menu';


export interface IDessertsProps {}

const Desserts: React.FunctionComponent<IDessertsProps> = (props) => {
  return (
  <>
  <main role="main" className="container">

<div className="starter-template mt-5">
  <h1>Efterrätter</h1>
  <p className="lead">Efterrätter</p>
</div>

{Menu.map((menu) => {
  if(menu.type.localeCompare("dessert") === 0){
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

export default Desserts;