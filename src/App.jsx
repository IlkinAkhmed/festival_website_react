import './App.scss';
import Festival from './Components/Festivals';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Island from './Components/Island';
import Magazine from './Components/Magazine';
import MobileNav from './Components/MobileNav';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar/fixedNav';
import Programme from './Components/Programme';
import Speakers from './Components/Speakers';
import Ticekts from './Components/Tickets';

function App() {
  return (
    <>
      <Navbar />
      <MobileNav />
      <Home />
      <Festival/>
      <Programme/>
      <Island/>
      <Movies/>
      <Magazine/>
      <Speakers/>
      <Ticekts/>
      <Footer/>
    </>
  );
}

export default App;
