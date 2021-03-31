import "./Rightside.css";
import { Link } from "react-router-dom";

const Rightside = ({ title, text, footer, link, children, linkpath }) => {
  return (
    <div className="RightContainer">
      <h3 className="RightContainer-title">{title}</h3>
      <p className="RightContainer-text">{text}</p>
      {children}
      <div className="RightContainer-footer">
        <p className="RightContainer-footer-text">{footer}</p>
        <Link to={linkpath} className="RightContainer-footer-link">
          {link}
        </Link>
      </div>
    </div>
  );
};

export default Rightside;
