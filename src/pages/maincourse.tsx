import React from 'react';
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

{Menu.map((menu) => {
  if(menu.type.localeCompare("dish") === 0){
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

export default MainCourse;