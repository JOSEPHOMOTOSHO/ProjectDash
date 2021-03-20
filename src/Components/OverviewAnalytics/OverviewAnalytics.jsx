import "./OverviewAnalytics.css"
import { Analytics} from "../Analytics/Analytics";

const OverviewAnalytics = () => {
    return (
        <div className = "OverviewAnalyticsContainer">
            <h5 className = "OverviewAnalyticsTitle">Overview</h5>
            <ul className="OverviewAnalyticslists">
        {Analytics.map((val, key) => {
          return (
            <li className="OverviewAnalytics-col" key={key}>
            <div className = "OverviewAnalytics-circle"></div>
              <div className="OverviewAnalytics-col-Num">{val.Number}</div>
              <div className="OverviewAnalytics-col-caption">{val.Caption}</div>
            </li>
          );
        })}
      </ul>
    </div>
    )
} 







export default OverviewAnalytics




// const Sidebar = () => {
//   return (
//     <div className="Sidebar-Container">
      
//     </div>
//   );
// };
// export default Sidebar;
