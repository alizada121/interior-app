import Advantages from './Advantages/Advantages';
import './App.css';
import Team from './Team/Team';
import Form from './Form/Form';
import Header from './header/Header';
import Portfolio from './portfolio/Portfolio';
import Services from './Services/Services';
import SliderPage from './slider-page/SliderPage';
import Project from './Project/Project';
import Map from './Map/Map';

function App() {
  return (
    <div className="App">
     <Header/>
     <SliderPage/>
     <Portfolio/>
     <Form/>
     <Team/>
     <Advantages/>
     <Services/>
     <Project/>
     <Map/>
    </div>
  );
}

export default App;
