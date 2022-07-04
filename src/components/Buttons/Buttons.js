import Button from "../UI/Button";
import '../Buttons/Buttons.css'

const Buttons = props => {
    return(
        <div className="calc-buttons">
            <div className="row">
                <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button>7</Button>
                        <Button>8</Button>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button>9</Button>
                        <Button className="calc-button__dark">DEL</Button>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button>4</Button>
                        <Button>5</Button>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button>6</Button>
                        <Button>+</Button>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button>1</Button>
                        <Button>2</Button>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button>3</Button>
                        <Button>-</Button>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button>.</Button>
                        <Button>0</Button>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button>/</Button>
                        <Button>*</Button>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-sm-12 col-xl-12 col-lg-12 p-0">
                    <div className="calc-buttons__wrapper">
                        <Button className="calc-button__dark">RESET</Button>
                        <Button className="calc-button__red">=</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons;