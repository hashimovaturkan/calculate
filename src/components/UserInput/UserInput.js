import { useEffect, useRef, useState } from "react";
import "./UserInput.css";

const UserInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  useEffect(() => {

    if(!isNaN(inputValue)){
      
      if (inputValue == 0) 
        setInputValue(props.onSend);
      else 
        setInputValue(inputValue.toString() + props.onSend.toString());
    }

    if(props.onSend == "RESET"){
      setInputValue("");
      setResult("");
      setOperation("")
    }

    if(props.onSend == "DEL"){
      if(inputValue != ""){
        setInputValue( Math.floor(+inputValue/10));
      }
    }

    if(props.onSend == "."){
      setInputValue(inputValue.toString() + ".")
    }

    if(props.onSend == "+" || props.onSend == "-" || props.onSend == "*" || props.onSend == "/" || props.onSend == "="){

      if(!result) 
        setResult(inputValue)
      else{
        switch(operation)
        {
            case '+' : {
              setResult(prevState => {
                if(props.onSend == '='){
                  setInputValue(+prevState + +inputValue);
                }
              return(
                +prevState + +inputValue
              )
            });
            };break;

            case '-' : {
              setResult(prevState => {
                if(props.onSend == '='){
                  setInputValue(+result - +inputValue);
                }
              return(
                +prevState - +inputValue
              )
            });
            };break;

            case '/' : {
              setResult(prevState => {
                if(props.onSend == '='){
                  setInputValue(+result / +inputValue);
                }
              return(
                +prevState / +inputValue
              )
            });
            };break;

            case '*' : {
              setResult(prevState => {
                if(props.onSend == '='){
                  setInputValue(+result * +inputValue);
                }
              return(
                +prevState * +inputValue
              )
            });
            };break;

            //default : setResult(inputValue);
        }
      }

      setOperation(props.onSend);

      if(props.onSend != '=')
        setInputValue("");
      
    }
      
  }, [props.onRandom]);

  return (
    <input
      disabled="disabled"
      defaultValue={inputValue}
      className={"calc-input calc-input " + (props.onSend == '.' ? "calc-input__dir-left" : "calc-input__dir-right")}
    />
  );
};

export default UserInput;
