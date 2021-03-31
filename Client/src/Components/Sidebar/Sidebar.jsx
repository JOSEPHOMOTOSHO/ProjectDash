import "./Sidebar.css";
import { NavBar } from "../NavBar/NavBar";

const Sidebar = () => {
  return (
    <div className="Sidebar-Container">
      <ul className="Sidebar-Container-lists">
        <h5 className="Sidebar-Container-head">DashBoard</h5>
        {NavBar.map((val, key) => {
          return (
            <li className="Sidebar-Container-row" key={key}>
              <div className="Sidebar-Container-icon">{val.icon}</div>
              <div className="Sidebar-Container-title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Sidebar;
