import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Cart from './Components/Cart';
import Foot from './Components/Footer/Foot';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Cart></Cart>
     <Foot></Foot>
    </div>
  );
}

export default App;
