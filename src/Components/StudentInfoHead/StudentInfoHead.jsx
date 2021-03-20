import "./StudentinfoHead.css"
import {StudentDetails} from "../StudentDetails/StudentDetails"


const StudentinfoHead = () => {
    return (
        <div className = "StudentinfoContainer">
        <ul className="StudentinfoContainer-lists">
        {StudentDetails.map((val, key) => {
          return (
            <li className="StudentinfoContainer-col" key={key}>
              <div className="StudentinfoContainer-student">{val.studentName}</div>
              <div className="StudentinfoContainer-age">{val.Age}</div>
              <div className="StudentinfoContainer-Gaurdianphone">{val.GuardiansPhone}</div>
              <div className="StudentinfoContainer-Gaurdianmail">{val.GuardiansEmail}</div>
              <div className="StudentinfoContainer-location">{val.Location}</div>
              <div className="StudentinfoContainer-Status">{val.Status}</div>
              <div className="StudentinfoContainer-icon">{val.icon}</div>
            </li>
            
          );
        })}
      </ul>
        </div>
    )
}
export default StudentinfoHead