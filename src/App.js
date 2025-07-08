
import './css/main.css'


import ColOne from './components/colOne';
import ColTwo from './components/colTwo';
import ColThree from './components/colThree';
import ColFour from './components/colFour';
import MobileHeader from './components/mobileHeader';


function App() {
  return (
    
     
    <div id="container"> 
      <MobileHeader />
      <ColOne />
      <ColTwo />
      <ColThree />
      <ColFour />
    </div>
    
  );
}

export default App;
