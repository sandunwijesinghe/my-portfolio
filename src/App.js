
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Technologies from "./components/Technologies";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      
      <About/>
      <Projects/>
      <Technologies/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;
