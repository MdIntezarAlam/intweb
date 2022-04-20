import React from 'react'
import { useState } from 'react';
function Form(props){
    const [text, setText] = useState("");
    //This is UpperCase Fun
    const uppperHandler = (e) => {
        let newText = text.toUpperCase();
        setText(newText);
        //this is for Alert
        props.showAlert("Converted to UpperCase", "success")
    }
    //This is LowerHandlerCase Fun
    const lowerHandler = (e) => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    //This is for delete Word
    const clear = (e) => {
        let newText = "";
        setText(newText);
        props.showAlert("text is Deleted", "danger")

    }
    //Copy
    const copy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("text is Copied to lipboard", "primary")
    }
    //This is Change Word Fun
    const UpperChange = (e) => {
        setText(e.target.value)
    }
  //This is For Removing Extra Space
  const ExtraSpace =() =>{
      let  newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space is removed", "success")
  }
    return (
        <>
            <div className="container" style={{color:props.mode === 'dark' ?'white':'black'}}>
                <h1 style={{color: "black"}}>Word Count Project</h1>
                <div>
                    <textarea className="form-control my-1" id="myBox" value={text} rows="6" onChange={UpperChange} style={{backgroundColor:props.mode === 'dark' ?' grey':'white',
                color:props.mode === 'dark' ? 'white':'black'}}/>
                </div>
                <button className="btn btn-sm mt-2 mx-1 btn-primary" onClick={uppperHandler}>Capital</button>
                <button className="btn btn-sm mt-2 mx-1 btn-primary" onClick={lowerHandler}>Small</button>
                <button className="btn btn-sm mt-2 mx-1 btn-danger" onClick={clear}>Delete</button>
                <button className="btn btn-sm mt-2 mx-1 btn-secondary" onClick={copy}>Copy</button>
                <button className="btn btn-sm mt-2 mx-1 btn-primary" onClick={ExtraSpace}>Space</button>
            </div>
            <div className="container m-2" style={{color:props.mode === 'light' ?' gray':'white'}}>
                <span style={{backgroundColor:"aqua", color:"black", fontSize:"35px"}}>Your Text Here</span>
                <p>{text.split(" ").length} Word and {text.length} Character</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <span  style={{backgroundColor:"aqua", color:"black", fontSize:"35px"}}>Preview</span>
                <p>{text.length>0?text:"Text Will Shown Here"}</p>
            </div>
        </>
    )
}
export default Form