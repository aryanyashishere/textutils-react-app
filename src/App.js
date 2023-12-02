import react , {useState} from 'react'

import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';




function App() {

  const [mode, setmode] = useState('light')

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#152330';
    }
    else{
        setmode('light')
        document.body.style.backgroundColor='white';
    }
  }
  return (
   
  <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <div className='container'>
      <Textform heading= "Enter the text here : " mode={mode}/>
      {/* <About/> */}
      </div>



  </>
  );
}

export default App;
