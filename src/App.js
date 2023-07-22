import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'; 

function App() {
  let name="name"
  return (
    <div className='App'> <Navbar name={name} />
    </div>
  );
}

export default App;
