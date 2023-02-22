import './App.css';
import Navbar from './navbar/navbar';
import Header from './header/header';
import Resume from './resume/resume';
import Apre from './apresentation/Apre';
import Footer from './footer/footer';
import DescricaoFooter from './footer/descricaofooter';

function App() {
  return (
    <div className="App">
      <div className='containerapp'>
        <div className="App-header">
          <Navbar></Navbar>
          <Header></Header>
          <Resume></Resume>
          <Apre></Apre>
          
        </div>
      </div>
      <Footer></Footer>
      <DescricaoFooter></DescricaoFooter>
    </div>
  );
}

export default App;
