import React,{useState} from 'react'

export default function TextForm(props) {

 const [text,setText] = useState("Enter Text here!");

 const handleOnChange = (event) =>{
    setText(event.target.value);
 }

 const handleupClick = () =>{
    let newtext = text.toUpperCase();
    setText(newtext)
 } 
 const handleloClick = () =>{
    let newtext = text.toLowerCase();
    setText(newtext)
 } 
 const handlecopy = () =>{
   var text = document.getElementById("exampleFormControlTextarea1")
   text.select()
   navigator.clipboard.writeText(text.value)

   props.showAlret('Content Copied To Clipboard!','success')
 }

 const removetext = () =>{
   setText(" ")
 }

  return (
    <>
    <div className="form-group container" >
      <h1 style = {{color : props.mode==='dark' ? 'white' : 'black'}}>{props.title}</h1>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        style = {{color : props.mode==='dark' ? 'black' : 'black'}}
        value = {text}
        onChange={handleOnChange}
      ></textarea>
      <button className="btn btn-primary my-2 mx-2" onClick={handleupClick}>ToUpcase</button>
      <button className="btn btn-primary my-2 mx-2  " onClick={handleloClick}>ToLocase</button>
      <button className="btn btn-primary my-2 mx-2  " onClick={handlecopy}>Copy Text</button>
      <button className="btn btn-primary my-2 mx-2  " onClick={removetext}>Clear Text</button>
    </div>
     <div className='container my-2' style = {{color : props.mode==='dark' ? 'white' : 'black'}}>
         <h2>Summary of the Text</h2>
         <p>{text.split(" ").length} words and {text.length} charcters</p>
         <p>{0.008 * text.split(" ").length} Minutes read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:'Type anything to show preview'}</p>
     </div>
    </>
 
  )
}
