import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'

function TextForm(props) {
//     const [tstyle, setStyle] = useState({
//       backgroundColor :'red',
//       Color:'blue'
//     })
//     const changestyle  = ()=>{
//       if(tstyle.backgroundColor==='red'){
//         setStyle({
//         backgroundColor:'black',
//         Color:'white'
//       })
//   }
//   else{
//     setStyle({
//       backgroundColor:'red',
//       Color:'blue'
//   })
// }
// }
    const [text, setText] = useState('');

    const handleUPclick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLOclick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handlechange =(event)=>{
        setText(event.target.value)
    }


  return (
    <>
   
<div className="main mb-3">
  <label htmlFor="textform" className="form-label"><h2>{props.heading}</h2></label>
  <textarea value={text} className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handlechange}></textarea>
  
</div>
<button className={`btn btn-${props.mode} mx-1`} onClick={handleUPclick}  >UpperCase</button>
<button className={`btn btn-${props.mode} mx-1`} onClick={handleLOclick} >LowerCase</button>

<div className="my-2">
  <h2> Summary</h2>
  {text.trim().split(' ').length} Words and {text.trim().length} Characters
  <p>{0.008 * text.trim().split(' ').length} Minutes Read</p>
</div>

<div className="my-2">
<h2>Preview</h2>
{text}

</div>
</>

  )
}

TextForm.propTypes = {
    heading: PropTypes.string,

}

export default TextForm

