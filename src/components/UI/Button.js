import "../UI/Button.css";

const Button = (props) => {
  return (
    <div
      value={props.value}
      className={"calc-button " + props.className}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
export default Button;
