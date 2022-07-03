import Button from "../UI/Button";

const Buttons = props => {
    return(
        <div className="calc-buttons">
            <div className="container">
                <div className="row">
                    <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6">
                        <Button>7</Button>
                        <Button>8</Button>
                    </div>
                    <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6">
                        <Button>9</Button>
                        <Button>DEL</Button>
                    </div>
                    <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6">
                        <Button>4</Button>
                        <Button>5</Button>
                    </div>
                    <div class="col-12 col-md-12 col-sm-12 col-xl-6 col-lg-6">
                        <Button>6</Button>
                        <Button>+</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buttons;