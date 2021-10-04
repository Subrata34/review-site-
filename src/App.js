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
     <footer>
       <Foot></Foot>
     </footer>
     
    </div>
  );
}

export default App;
