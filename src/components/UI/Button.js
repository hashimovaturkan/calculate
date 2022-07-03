import '../UI/Button.css';

const Button = props => {
    return(
        <div className={"calc-button " + props.className}>
            {props.children}
        </div>
    )
}
export default Button;