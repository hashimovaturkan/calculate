import Button from "../UI/Button";
import '../Buttons/Buttons.css'
import { useRef } from "react";

const Buttons = props => {

    const numberHandler = e => {
        props.onGetValue(e.target.innerText);
        
    }

    return(
        <div className={"calc-buttons " + (props.onColorChange ? "calc-buttons__color" : "")}>
            <div className="row">
                <div className="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-12 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button onClick={numberHandler}>7</Button>
                        <Button onClick={numberHandler}>8</Button>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-12 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button onClick={numberHandler}>9</Button>
                        <Button className="calc-button__dark" onClick={numberHandler}>DEL</Button>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-12 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button onClick={numberHandler}>4</Button>
                        <Button onClick={numberHandler}>5</Button>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-12 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button onClick={numberHandler}>6</Button>
                        <Button onClick={numberHandler}>+</Button>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-12 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button onClick={numberHandler}>1</Button>
                        <Button onClick={numberHandler}>2</Button>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-12 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button onClick={numberHandler}>3</Button>
                        <Button onClick={numberHandler}>-</Button>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-12 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button onClick={numberHandler}>.</Button>
                        <Button onClick={numberHandler}>0</Button>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button onClick={numberHandler}>/</Button>
                        <Button onClick={numberHandler}>*</Button>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-sm-12 col-xl-12 col-lg-12 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button className="calc-button__dark" onClick={numberHandler}>RESET</Button>
                        <Button className="calc-button__red" onClick={numberHandler}>=</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons;