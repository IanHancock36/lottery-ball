
import './App.css';
import Ball from './Ball'; 
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
  
     <Lottery />
     <Lottery  title='Mini Daily Lotto' maxNum={10} maxBalls={4}/>
     

    
    </div>
  );
}

export default App;
