import React, { lazy } from 'react';
import { Menu } from '../models/Menu';
import './maincourse.scss';

export interface IMainCourseProps {}

const MainCourse: React.FunctionComponent<IMainCourseProps> = (props) => {
  return (
  <>
  <main role="main" className="container">

<div className="starter-template mt-5">
  <h1>Varmrätter</h1>
  <p className="lead">Varmrätter</p>
</div>

<>
<div className='menuContainer'>
{Menu.map((menu) => {
  if(menu.type.localeCompare("dish") === 0){
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

export default MainCourse;