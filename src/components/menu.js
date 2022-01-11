import React from 'react';
import './css/menu.css';
import Slice from './Slice';
function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
        <Slice
        img={plain}
        title="Plain"
        description="Its got cheese, its got sauce, and its only a dollar, What more would you ask for?"
        price="1.00"/>
       
 
     <Slice 
        img={pepperoni}
        title="pepperoni"
        description="Its got cheese, its got sauce, and its only a dollar, What more would you ask for?"
        price="1.00"/>

    <Slice 
        img={hawaiian}
        title="hawaiian"
        description="Its got cheese, its got sauce, and its only a dollar, What more would you ask for?"
        price="1.00"/>
      
      <Slice 
        img={bbq}
        title="bbq"
        description="Its got cheese, its got sauce, and its only a dollar, What more would you ask for?"
        price="1.00"/>
      
      
      
      </div>
    </div>
  );
}

export default Menu;
