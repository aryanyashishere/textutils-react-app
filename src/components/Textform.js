import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';


const Textform = (props) => {
    
    const handleUpperclick = ()=>{
        // console.log("button was clicked  " + text);
        let newText = text.toUpperCase();
        
        setText(newText);
        
        
    }

    
        const handleLowerclick = ()=>{
            // console.log("button was clicked  " + text);
            let newText = text.toLowerCase();
            
            setText(newText);
            
            
        }   
    
        const copyToClipboard = () => {
            navigator.clipboard.writeText(text);
            // console.log("copied ");
            alert("copied to clipboard hehe")
          };


    const handleOnchange = (event)=> {
        // console.log("on change ");
        setText(event.target.value)
    }
    
    
    const [text, setText] = useState('enter text here');
    return (
        <>
        

            
            <div class="mb-3">
                <h1>{props.heading}</h1>
                
                <textarea className='form-control' id="myBox" value={text} onChange={handleOnchange}  rows="8"></textarea>
            </div>
            <button className="btn btn-pimary  mx-1 "  onClick={handleUpperclick}>Convert to Uppercase</button>
            
            <button className="btn btn-pimary  mx-1 "  onClick={handleLowerclick}>Convert to Lowercase</button>

            <button className="btn btn-pimary  mx-1 "  onClick={copyToClipboard}>Copy to clipboard</button>

          
        <div/>

        <div className='container'>
                <h2>Your Text Summary: </h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>It can be read in : {0.008* text.split(" ").length} Minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
        </div>

        </>
    )
}

export default Textform