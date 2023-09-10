import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

function App() {
  //const nameList = ['Rafi', 'Ohin', 'Sakib', 'Shimanto'];
  const infromation =[
    {name:'Rafi', job:'Arkitecar'},
    {name:'Ohin', job:'Singer'},
    {name:'Sakib', job:'Busnesmen'},
    {name:'Shimanto', job:'BUsness men'}
  ]
  const products = [
    {name:'Photoshop', price:'$95.35'},
    {name:'PDF Rader', price:'$78.43'},
    {name:'Odobi', price:'$68.93'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Person Lists</h1>
       
       <ul>
        {
         infromation.map(nm=> <li>{nm.name}</li>)
        }
       </ul>
       <Users></Users>
       <h2>Parsonal infromation</h2>
       {
        infromation.map(info=> <Information detale={info} ></Information>)
       }
       <Counter></Counter>
       {
        products.map(pdc=> <Product pod={pdc}></Product>)
       }
       </header>
    </div>

  );
}
function Information(props){
  const informationStyle = {
    border:'5px solid blue',
    margin:'7px ',
    borderRadius:'5px',
    padding:'3px'
  }
  return (
    <div style={informationStyle}>
      <h4>Name:{props.detale.name}</h4>

      <h5>Profession:{props.detale.job}</h5>
    </div>
  );
}
function Users() {
  const [user, setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  })
  return(
      <div>
        <h3>Dynamic Users:{user.length}</h3>
        <ul>
          {user.map(usr=> <li>{usr.name}</li>)}
        </ul>
      </div>
  );
}

function Counter (){
  const [count, setCount ] = useState(0);
  const handleIncrease45 = () => {
    const newcount = count +1;
    setCount(newcount);
  };
  return (
    <div>
    <h3>Counter:{count}</h3>
    <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
    <button onClick={handleIncrease45}>Increage</button>
    </div>
  )
}
function Product (props){
  const productStyle = {
    backgroundColor:'lightgray',
    margin:'5px',
    borderRadius:'5px',
    padding:'3px'
  }
  return(
    <div style={productStyle}>
      <h4>Name:{props.pod.name}</h4>
      <h5>Price:{props.pod.price}</h5>
    </div>
  );
}

export default App;
