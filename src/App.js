import './App.css';
import Form from './Form/Form';
import Header from './header/Header';
import Portfolio from './portfolio/Portfolio';
import SliderPage from './slider-page/SliderPage';

function App() {
  return (
    <div className="App">
     <Header/>
     <SliderPage/>
     <Portfolio/>
     <Form/>
    </div>
  );
}

export default App;
