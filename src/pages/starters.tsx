import React from 'react';
import { Menu } from '../models/Menu';


export interface IStartersProps {}

const Starters: React.FunctionComponent<IStartersProps> = (props) => {
  return (
  <>
  <main role="main" className="container">

<div className="starter-template mt-5">
  <h1>Förätter</h1>
  <p className="lead">Förätter</p>
</div>

<>
<div className='menuContainer'>
{Menu.map((menu) => {
  if(menu.type.localeCompare("start") === 0){
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

export default Starters;