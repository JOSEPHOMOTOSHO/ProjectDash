import "./StudentinfoMain.css"

import {StudentMain} from "../StudentDetailsMain/StudentMain"

const StudentinfoHead = () => {
    return (
        <div className = "StudentinfomainContainer">
        <ul className="StudentinfomainContainer-lists">
        {StudentMain.map((val, key) => {
          return (
            <li className="StudentinfomainContainer-col" key={key}>
              <div className="StudentinfomainContainer-student">{val.studentName}</div>
              <div className="StudentinfomainContainer-age">{val.Age}</div>
              <div className="StudentinfomainContainer-Gaurdianphone">{val.GuardiansPhone}</div>
              <div className="StudentinfomainContainer-Gaurdianmail">{val.GuardiansEmail}</div>
              <div className="StudentinfomainContainer-location">{val.Location}</div>
              <div className="StudentinfomainContainer-Status">{val.Status}</div>
              <button className="StudentinfomainContainer-button">Scratch 2</button>
              <div className="StudentinfomainContainer-icon">{val.icon}</div>

            </li>
            
          );
        })}
      </ul>
        </div>
    )
}
export default StudentinfoHead