import "./OverviewContainer.css"
import OverviewAnalytics from "../OverviewAnalytics/OverviewAnalytics"
import StudentinfoHead from "../StudentInfoHead/StudentInfoHead"
import StudentInfoMain from "../StudentInfoMain/StudentInfoMain"
const OverviewContainer = () => {
    return (
        <div className = "OverviewContainer">
                <OverviewAnalytics/>
                <StudentinfoHead />
                <StudentInfoMain />
        </div>
    )
} 







export default OverviewContainer