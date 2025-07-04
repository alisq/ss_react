
import './css/main.css'
import Header from './components/header';
import ColOne from './components/colOne';
import ColTwo from './components/colTwo';
import ColThree from './components/colThree';
import ColFour from './components/colFour';

function App() {
  return (
    <>
    <Header />
     
    <div id="container"> 
    
      <ColOne />
      <ColTwo />
      <ColThree />
      <ColFour />
    </div>
    </>
  );
}

export default App;
