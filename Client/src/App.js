import LoginSection from "./Components/LoginSection/LoginSection";
import SignupSection from "./Components/SignupSection/SignupSection";
import Sidebar from "./Components/Sidebar/Sidebar"
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DashBoardMain from "./Components/DashBoardMain/DashBoardMain"
// import {Redirect} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/LoginSection" component = {LoginSection} />
       <Route path="/SignupSection"  component = {SignupSection} />
       {/* <Route path="/Sidebar"  component = {Sidebar} /> */}
        {/* <Redirect from = "/" to = "/LoginSection"/> */} 
        <div className = "Dashboard-container">
        <Sidebar />
        <DashBoardMain />
     
         </div>   
         

       
        </Switch>
       
        
      </div>
    </Router>
    
   
  );
}

export default App;
