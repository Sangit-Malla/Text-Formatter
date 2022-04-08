import React, { useState } from 'react'


export default function TextForm(props) {

    const handleOnchange = (event) => {
        setText(event.target.value);

    }
    const handlelowclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("the text is converted to LowerCase Successfully", "success");
    }
    const handleupclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("the text is converted to UpperCase Successfully", "success");
    }
    const handleclear = () => {
        let newText = " ";
        setText(newText);
        props.showalert("the text is cleared", "success");

    }
    const handlefindchange = (e) => {
        findword(e.target.value);
    }
    const handlereplacechange = (e) => {
        replaceword(e.target.value);
    }
    const changebuttoncolor = (e) => {
        let b = <button className="btn btn-success">Replaced</button>
        setbtnfirst(b);


    }
    const handlereplace = () => {
        let newText = text.replaceAll(fword, rword);
        setText(newText);
        setbtnfirst("Replaced");
        props.showalert("the text is replaced successfully", "success");

    }


    const handlecopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [btnfirst, setbtnfirst] = useState("Replace");
    const [text, setText] = useState(" ");
    const [fword, findword] = useState(" ");
    const [rword, replaceword] = useState(" ");
    return (
        <div className = "container">
            <>
                <div className="container mx-3" >
                    <div className="mb-3">
                        <h1>{props.heading}</h1>
                        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange}></textarea>
                    </div>
                    <button className="btn btn-primary mx-3 my-3 " onClick={handleupclick} >Convert to UpperCase</button>
                    <button className="btn btn-primary mx-3 my-3" onClick={handlelowclick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-3 my-3" onClick={handleclear}>Clear text</button>
                    <button className="btn btn-primary mx-3 my-3" onClick={handlecopy}>Copy text</button>
                    <div className="container my-3">
                        <h4>Enter the initial word</h4>
                        <textarea className="form-control" id="myBox" rows="1" value={fword} onChange={handlefindchange}></textarea>
                        <h4>Enter word to be replaced</h4>
                        <textarea className="form-control" id="myBox" rows="1" value={rword} onChange={handlereplacechange}></textarea>
                        <button className="btn btn-primary my-3 " onClick={handlereplace} value={btnfirst} onChange={changebuttoncolor}>{btnfirst}</button>
                    </div>
                    <div className="container my-3" >
                        <h1>The text summary is </h1>
                        <p>the total words is {text.split(" ").filter((element) => { return element.length !== 0 }).length} and {text.length} of characters</p>
                    </div>
                </div>
            </>
        </div>
    )
}
