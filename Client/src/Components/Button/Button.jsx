import "./Button.css";
const Button = (props) => {
  return (
    <button {...props} className="app-btn">
      {props.children}
    </button>
  );
};
export default Button;
