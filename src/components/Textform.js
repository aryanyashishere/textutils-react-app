import React, { useState } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';


const Textform = (props) => {

    const handleUpperclick = () => {
        // console.log("button was clicked  " + text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to Uppercase", "success")


    }


    const handleLowerclick = () => {
        // console.log("button was clicked  " + text);
        let newText = text.toLowerCase();

        setText(newText);
        props.showAlert("Converted to Lowercase", "success")



    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        // console.log("copied ");
        props.showAlert("Copied to clipboard", "success")
    };


    const handleOnchange = (event) => {
        // console.log("on change ");
        setText(event.target.value)
        
    }


    const [text, setText] = useState('');
    return (
        <>


            <div className='container' style={{ color: props.mode === 'dark'?'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div class=" mb-3">

                    <textarea className='form-control' id="myBox" style={{ background: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark'?'white' : 'black'}} value={text} onChange={handleOnchange} rows="8"></textarea>
                </div>
                <button className="btn btn-pimary  mx-1 " style={{ color: props.mode === 'dark'?'white' : 'white', background:  props.mode === 'dark'?'black' : 'brown'}} onClick={handleUpperclick}>Convert to Uppercase</button>

                <button className="btn btn-pimary  mx-1 " style={{ color: props.mode === 'dark'?'white' : 'white', background:  props.mode === 'dark'?'black' : 'brown'}} onClick={handleLowerclick}>Convert to Lowercase</button>

                <button className="btn btn-pimary  mx-1 " style={{ color: props.mode === 'dark'?'white' : 'white', background:  props.mode === 'dark'?'black' : 'brown'}} onClick={copyToClipboard}>Copy to clipboard</button>


                <div />

                <div className='container' style={{ color: props.mode === 'dark'?'white' : 'black'}}>
                    <h2>Your Text Summary: </h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>It can be read in : {0.008 * text.split(" ").length} Minutes</p>
                    <h2>Preview</h2>
                    <p>{text.length>0? text: "enter your text in box to watch its preview here."}</p>
                </div>
            </div>
        </>
    )
}

export default Textform