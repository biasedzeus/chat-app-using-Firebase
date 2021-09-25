import './App.css';
import HomePage from './Componets/Homepage/HomePage';
import Login from './Componets/Login';
import SideBar from './Componets/SideBar/SideBar';
import TopBar from './Componets/TopBar/TopBar';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div >
      <TopBar/>
  {/* <Login/> */}
  <HomePage/>
  {/* <SideBar/> */}
    </div>
  );
}

export default App;
