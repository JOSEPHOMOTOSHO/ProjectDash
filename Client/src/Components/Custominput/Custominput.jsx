import "./Custominput.css";

const Custominput = ({ label, text, children, ...props }) => {
  return (
    <div className="Custominput">
      <label className="Custominput-label">{label}</label>
      <input {...props} className="Custominput-input" />
      <p className="custominput-text">{text}</p>
      <small className="custominput-error">{children}</small>
    </div>
  );
};

export default Custominput;
