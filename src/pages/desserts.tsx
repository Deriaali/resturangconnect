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

<>
<div className='menuContainer'>
{Menu.map((menu) => {
  if(menu.type.localeCompare("dessert") === 0){
return <>
<div className='productContainer'>
<img src={menu.imageURL} loading="lazy" ></img>
<section className='productContainer__text'>
<span>{menu.name}</span>
<span>{menu.price}:-</span>
</section>
</div>
</>}
})}
</div></>
</main>
  </>
  );
};

export default Desserts;