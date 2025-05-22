import React, {useState} from 'react'

export default function Textform(props) {




  
  //UpperCase Convert
const handleUpClick =() =>{
// console.log("UpperCase was Clicked" + text);
let newText=text.toUpperCase();
setText(newText);
props.showAlert("Converted To UpperCase","success");
}


  //lowerCase Convert
  const handleLowClick =() =>{
    // console.log("Lowercase was Clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase","warning");
    }

    //ClearText 
  const clearText =() =>{
    // console.log( " ");
    let newText=" ";
    setText(newText);
    props.showAlert("Clear Data","danger");
    }


        //Delete one letter 
  const clearOneText =() =>{
    // console.log( " ");
    let newText=text.substring(0,text.length-1);
    setText(newText);
    props.showAlert("Clear One Word","dark");
    }

          //Copy Text 
  const copyText =() =>{
   let input=document.getElementById("mybox");
  //  input.select();
   navigator.clipboard.writeText(input.value);
  //  document.getSelection().removeAllRanges();
   props.showAlert("Copy To Clipboard","info");
    }

      //Remove Extra Space 
      const removeExtraSpace =() =>{
        let newTxt=text.split(/[ ]+/);
        setText(newTxt.join(" "))
        props.showAlert("Remove Extra Space","primary");
         }


    //uppercase First Letter Convert
  const upperFirstText =() =>{
    // console.log(text.split(" ").length.substring(0,1).toUpperCase());
    // let newText=text.split(" ").length.substring(0,1).toUpperCase();
    // setText(newText);
    }


const handleOnChange =(event) =>{
    console.log("on Change");
   setText(event.target.value);//We can change value in input filed
    }


  const [text,setText] = useState("");
//   text="new text"//Wrong Way to change State
// setText("new text")//Right Way to change State
    return (
      <>
 <div style={{color: props.mode=== 'dark'? 'white':'black'}}>
<h2 className='mb-3'>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode=== 'dark'? '#023047':'white',color:props.mode=== 'dark'? 'white':'black'}}></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary " onClick={handleUpClick}>Convert To UpperCase</button>

<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To LowerCase</button>

<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={clearText}>Clear Text</button>

<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={clearOneText}>Del one</button>

<button disabled={text.length===0}  className="btn btn-primary mx-1 my-2" onClick={copyText}>Copy Text</button>

<button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={removeExtraSpace}>Remove Space</button>

{/* <button className="btn btn-primary mx-3" onClick={upperFirstText}>Title Case</button> */}

 </div>
 
 <div className="container" style={{color: props.mode=== 'dark'? 'white':'black'}}>
{/* <h2>Your Text Summary</h2> */}
<p>
  {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and Characters {text.length}
</p>


<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0 }).length}  Minute read</p>
<h2>Preview</h2>
<p>{text.length >0?text:"Enter something in the text box here to preview it here"}</p>
 </div>
 </>
  )
}
