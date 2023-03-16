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

{Menu.map((menu) => {
  if(menu.type.localeCompare("start") === 0){
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

export default Starters;