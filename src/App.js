import logo from './logo.svg';
import './App.css';

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
       <h2>Parsonal infromation</h2>
       {
        infromation.map(info=> <Information detale={info} ></Information>)
       }
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
