import React from 'react';
import {Route, NavLink, HashRouter, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import NameLookUp from './nameLookUp.js';
import TransactionHistory from './transactionHistory.js';
import * as serviceWorker from './serviceWorker';
import './userdashboard.css'
import BalanceCheck from './BalanceCheck.js';
import AccountOpening_BVN from './Account_opening_BVN.js';
import AccountOpening_noBVN from './Account_opening_noBVN.js';
import IntraBank from './intrabank.js';
var createReactClass = require('create-react-class');



var Homepage = createReactClass({
    render: function(){
        return(
            <HashRouter>
               <div className="navigate">
                 <h3 className="info"><i>APIC Test App</i></h3>
                 <NavLink exact to ="/intrabank.js" activeStyle={{background: "yellow"}} ><button className = "well1" style={{width: "140px"}}><h4>IntraBank Transfer</h4></button></NavLink>
                 <NavLink to ="/nameLookUp.js" style={{textDecoration: "none", width: "fitContent"}}><button className = "well2"style={{display: "inline", width: "110px"}}><h4>Name LookUp</h4></button></NavLink>
                 <NavLink to ="/transactionHistory.js" style={{textDecoration: "none"}}><button className = "well2" style={{display: "inline", width: "145px", textAlign: "center"}} ><h4>Transaction History</h4></button></NavLink>
                 
                 <NavLink to ="/BalanceCheck.js" style={{textDecoration: "none", width: "fitContent"}}><button className = "well2"style={{display: "inline", width: "110px"}}><h4>Balance Check</h4></button></NavLink>
                 
                 <NavLink to ="/Account_opening_BVN.js" style={{textDecoration: "none", width: "fitContent"}}><button className = "well2"style={{display: "inline", width: "170px"}}><h4>Acct Opening with BVN</h4></button></NavLink>
                 
                 <NavLink to ="/Account_opening_noBVN.js" style={{textDecoration: "none", width: "fitContent"}}><button className = "well2"style={{display: "inline", width: "185px"}}><h4>Acct opening without BVN</h4></button></NavLink>        
        
                 <div className="gradient"></div>
               </div>
               <div className="samerow">
                  <div className="mainContainer">
                
                    <img className="gtlogo" src="http://www.citypeopleonline.com/wp-content/uploads/2017/01/Guaranty-Trust-Bank-gtbank-logo.jpg" />
                    <hr/>
                    {/* <NavLink to = "/dashboard.js"><button onClick={this.colorit} name="Bcolor1" style={{backgroundColor: this.state.Bcolor1,color: this.state.color1}}><h3>Dashboard</h3></button></NavLink><br/><br/>
             */}
                  </div>
                  <div className="content">
                    <Switch>
                      <Route path = "/intrabank.js" component = {IntraBank} />
                      <Route path="/nameLookUp.js" component = {NameLookUp} />
                      <Route path="/transactionHistory.js" component = {TransactionHistory} />
                      <Route path="/BalanceCheck.js" component = {BalanceCheck} />
                      <Route path="/Account_opening_BVN.js" component = {AccountOpening_BVN} />
                      <Route path="/Account_opening_noBVN.js" component = {AccountOpening_noBVN} />
                                
                    </Switch>
                  </div>
               </div>
    </HashRouter>    
        )
    }
})

export default Homepage;


ReactDOM.render(<Homepage />, document.getElementById('pocket'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
