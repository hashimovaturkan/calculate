import './Header.css';
import Theme from '../UI/Theme';
import { useState } from 'react';

const Header = props => {
    const [colorChange, setColorChange] = useState(false);

    const colorChangeHandler = e => {
        props.onColorHandler();
        setColorChange(e);
    }

    return(
        <header className={"calc-header " + (colorChange ? "calc-header__light" : "")}>
            <h2 className='calc-header__title'>Calculate</h2>
            <div className='calc-header__theme'>
                <h3 className='calc-header__theme-title'>Theme</h3>
                <Theme onColorChange={colorChangeHandler}/>
            </div>
        </header>
    )
}

export default Header;