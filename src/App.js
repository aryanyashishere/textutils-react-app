import react , {useState} from 'react'

import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';




function App() {

  const [mode, setmode] = useState('light')


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
    type: type
    })

    setTimeout(() => {
      setAlert(null)
      
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#152330';
      showAlert("Dark Mode has been enabled", "success")
      
    }
    else{
        setmode('light')
        document.body.style.backgroundColor='white';
        showAlert("Light Mode has been enabled", "success")

        
    }
  }
  return (
   
  <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className='container'>
      <Textform showAlert={showAlert} heading= "Enter the text here : " mode={mode} />
      {/* <About/> */}
      </div>



  </>
  );
}

export default App;
