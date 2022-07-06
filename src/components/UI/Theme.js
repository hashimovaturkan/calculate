import { useState } from 'react';
import './Theme.css';

const Theme = props => {
    const [colorChange, setColorChange] = useState(false);
    const changeColorHandler = e => {
           
            if(colorChange == true){
                setColorChange(false);
                props.onColorChange(false);
            }
            else{
                setColorChange(true);
                props.onColorChange(true);
            }
                
    }

    return(
        <div className='theme__wrapper'>
            <div className={"theme " + (colorChange ? "theme__dir" : "")} onClick={changeColorHandler}>
                <span className='theme__cycle'></span>
            </div>
            <div className='theme__numbers'>
                <span>1</span>
                <span>2</span>
            </div>
        </div>
    )
}

export default Theme;