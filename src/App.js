import './App.css';
import Hero from './components/Herosection/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reason from './components/Reasons/Reason';
import Testimonials from './Testimonials/Testimonials';



function App() {
  return (
    <>  
  <div className="App">
      <Hero/>
      <Programs/>
      <Reason/>
      <Plans/>
      <Testimonials/>
      <Join/>
     </div>
  </>

  );
}

export default App;
