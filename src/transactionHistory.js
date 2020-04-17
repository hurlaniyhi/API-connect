import React from 'react';
import createReactClass from 'create-react-class';
import './transaction_history.css'


var TransactionHistory = createReactClass({
    render: function(){
        return(
            <div className="transactionHistory">
                <form action="http://localhost:3001/example" method="POST">
                    <label for="accountN">Account Number  </label><br/>
                    <input type="number" name="AccountNumber" id="accountN" /><br/><br/>
                    <label for="startD">Start Date  </label><br/>
                    <input type="number" name="StartDate" id="startD" /><br/><br/>
                    <label for="stopD">Stop Date  </label><br/>
                    <input type="number" name="StopDate" id="stopD"/><br/><br/>
                    <button type="submit" className="send">Send</button>
                </form>
            </div>
        )
    }
})
export default TransactionHistory;