import Nav from "./Components/Nav";
import {Cartprovider} from "./Components/CartContext";

function App() {
  return (
    <Cartprovider>
    <div className="App">
      <Nav />

    </div>
    </Cartprovider>
  );
}

export default App;
