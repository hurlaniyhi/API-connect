import React from 'react';
import createReactClass from 'create-react-class';
import "./balanceCheck.css"


var BalanceCheck = createReactClass({
    render: function(){
        return(
            <div className="balanceCheck">
                <form action="http://localhost:3001/example" method="POST">
                    <label for="accountN">Account Number  </label><br/>
                    <input type="number" name="AccountNumber" id="accountN" /><br/><br/>
                    <button type="submit" className="send">Send</button>
                </form>
            </div>
        )
    }
})
export default BalanceCheck;