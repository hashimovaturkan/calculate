import './Theme.css';

const Theme = props => {
    return(
        <div className='theme__wrapper'>
            <div className='theme'>
                <span className='theme__cycle'></span>
            </div>
            <div className='theme__numbers'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
        </div>
    )
}

export default Theme;