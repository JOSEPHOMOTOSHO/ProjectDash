import DashBoardHead from "../DasboardHead/DashBoardHead"
import OverviewContainer from "../OverviewContainer/OverviewContainer"
import "./DashBoardMain.css"


const DashBoardMain = () => {
    return (
        <div className = "DashBoardMain">
            <DashBoardHead />
            <OverviewContainer />
        </div>
    )
}

export default DashBoardMain