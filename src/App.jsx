import logo from './logo.svg';
import './App.css';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
function App() {
  return (
    <>
    <div className='container'>
    <div className='row'>
       <div className='col-md-12'>
       <Header name="hospital managment"/>
       </div>
    </div>
   
   <div className='row'>
      <div className='col-md-3'>
        <NavigationMenu/>
      </div>
   </div>
</div>
</>
  );
}
