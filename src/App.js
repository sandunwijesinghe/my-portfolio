
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
    </div>
  );
}

export default App;
