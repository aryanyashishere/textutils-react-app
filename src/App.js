import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
// import Textform from './components/Textform';



function App() {
  return (
   
  <>
  <Navbar/>
  <div className='container'>
      {/* <Textform heading= "Enter the text here : "/> */}
      <About/>
      </div>



  </>
  );
}

export default App;
