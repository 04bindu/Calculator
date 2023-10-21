import React from "react";
import Input from "./components/input";
import Button from "./components/button";
import {useState} from "react";
import {evaluate} from "mathjs";
import "./index.css";

const App = () => {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const calculateResult = () => {
    const input = text.join("");
    setResult(evaluate(input).toPrecision(14));
  };

  const deleteChar = () => { 
    let str = text; 
    str = String(str).substring(0, str.length - 1); 
    setText(str); 
  };

    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input text={text} result={result} />

          <div className="row">
            <Button symbol={"C"} handleClick = {resetInput} color="#337CCF"/>
            <Button symbol={"Delete"} handleClick = {deleteChar} />
            <Button symbol={"%"} handleClick = {addToText} />
            <Button symbol={"/"} handleClick = {addToText} color="#337CCF"/>
          </div>

          <div className="row">
            <Button symbol={"7"} handleClick = {addToText} />
            <Button symbol={"8"} handleClick = {addToText} />
            <Button symbol={"9"} handleClick = {addToText} />
            <Button symbol={"*"} handleClick = {addToText} color= "#337CCF" />
          </div>

          <div className="row">
            <Button symbol={"4"} handleClick = {addToText} />
            <Button symbol={"5"} handleClick = {addToText} />
            <Button symbol={"6"} handleClick = {addToText} />
            <Button symbol={"-"} handleClick = {addToText} color= "#337CCF"/>
          </div>

          <div className="row">
            <Button symbol={"1"} handleClick = {addToText} />
            <Button symbol={"2"} handleClick = {addToText} />
            <Button symbol={"3"} handleClick = {addToText} />
            <Button symbol={"+"} handleClick = {addToText} color="#337CCF"/>
          </div>

          <div className="row">
            <Button symbol={"0"} handleClick = {addToText} />
            <Button symbol={"."} handleClick = {addToText} />
            <Button symbol={"#"} handleClick = {addToText} />
            <Button symbol={"="} handleClick = {calculateResult} color="#337CCF"/>
          </div>
        </div>
        
      </div>
    );
  };


export default App;
