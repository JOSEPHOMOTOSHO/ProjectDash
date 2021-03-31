
import "./DashBoardHead.css";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { BiBell } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";

const DashBoardHead = () => {
  return (
    <div className="DashBoardHead-Container">
      <div className="DashBoardHead-Container-main-input">
        <AiOutlineSearch className="AiOutlineSearch" />
        <input
          type="text"
          placeholder="Search for Students, Courses, Location"
          className="DashBoardHead-Container-input-input"
        />
      </div>
      <div className="DashBoardHead-Container-main-info">
        <button className="DashBoardHead-Container-Button">
          <FiUserPlus />
          <p className="DashBoardHead-Container-Button-text">Add Student</p>
        </button>

        <BiBell className="dash-bell" />

        <div className="DashBoardHead-Container-info">
          <div className="circle"></div>
          <p className="DashBoardHead-Container-info-text">Damilare</p>
          <RiArrowDropDownLine className="dropdown" />
        </div>
      </div>
    </div>
  );
};

export default DashBoardHead;
