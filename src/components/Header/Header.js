import './Header.css';
import Theme from '../UI/Theme';

const Header = props => {
    return(
        <header className="calc-header">
            <h2 className='calc-header__title'>Calculate</h2>
            <div className='calc-header__theme'>
                <h3 className='calc-header__theme-title'>Theme</h3>
                <Theme />
            </div>
        </header>
    )
}

export default Header;