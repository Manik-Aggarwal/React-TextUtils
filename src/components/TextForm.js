import React, {useState} from 'react';

export default function TextForm(props) {
    const handleOnChange = (e) => {
        console.log("Changed");
        setText(e.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to UPPER CASE", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to LOWER CASE", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard", "success");
    }

    const handleExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed", "success");
    }

    const handlealtclick = ()=>{
        let sentence = '';
        for(let i=0;i<text.length;i+=2){
            sentence = sentence + text.charAt(i).toLowerCase() +text.charAt(i+1).toUpperCase();
        }
        setText(sentence);
        props.showalert("Text has been converted to aLtErNaTiNg cAsE.", "success");
    }
    const handleinverseclick = ()=>{
        let sentence = '';
        for(let i=0;i<text.length;i++){
            if(text.charAt(i)===text.charAt(i).toUpperCase()){
                sentence = sentence + text.charAt(i).toLowerCase();
            }
            else{
                sentence = sentence + text.charAt(i).toUpperCase();
            }
        }
        setText(sentence);
        props.showalert("Text has been converted to InVeRsE CaSe.", "success");
    }

    const [text, setText] = useState("");

  return (
      <>
        <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
            <div className="mb-3 my-4">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode==="dark"?"#D3D3D3":"white"}}></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-sm btn-outline-${props.mode==='light'?'primary':'light'} m-1`} onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-sm btn-outline-${props.mode==='light'?'primary':'light'} m-1`} onClick={handleLoClick}>Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-sm btn-outline-${props.mode==='light'?'primary':'light'} m-1`} onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className={`btn btn-sm btn-outline-${props.mode==='light'?'primary':'light'} m-1`} onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className={`btn btn-sm btn-outline-${props.mode==='light'?'primary':'light'} m-1`} onClick={handleExtraSpaceClick}>Remove Extra Space</button>
            <button disabled={text.length===0} className={`btn btn-sm btn-outline-${props.mode==='light'?'primary':'light'} m-1`} onClick={handlealtclick}>Alternate Case</button>
            <button disabled={text.length===0} className={`btn btn-sm btn-outline-${props.mode==='light'?'primary':'light'} m-1`} onClick={handleinverseclick}>Inverse Case</button>
        </div>
        <div className="container my-4" style={{color: props.mode==="light"?"black":"white"}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes read</p>
            <h3>Text Preview</h3>
            <p>{text.length>0?text:"Enter something in textbox to preview it here."}</p>
        </div>
      </>
  )
}
