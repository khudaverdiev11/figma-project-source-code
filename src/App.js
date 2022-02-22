import Footer from './component/Footer';
import Header from './component/Header';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import Page4 from './component/Page4';
import './sass/style.css';

function App() {

return (
    <div className="app">
  <Header/>
  <Page1/>
  <Page2/>
  <Page3/>
  <Page4/>
  <Footer/>
    </div> 
  );
}

export default App;
