import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MobileApp from './components/MobileApp';
function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <Services />
      <MobileApp/>
    </div>
  );
}

export default App;
