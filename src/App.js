import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import HeroMain from "./Components/HeroMain";
import Info from "./Components/Info";
import NavBar from "./Components/NavBar";
import Review from "./Components/Review";
import Review2 from "./Components/Review2";


function App() {
  return (
    <div>
      <NavBar/>
      <div className=" ">
        <Hero/>
        <HeroMain/>
        <Review/>
        <Review2/>
        <Info/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;