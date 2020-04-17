import React from 'react';
import createReactClass from 'create-react-class';
import './Acct_opening_BVN.css'


var AccountOpening_BVN = createReactClass({
    render: function(){
        return(
            <div className="Account_opening_BVN">
                <form action="http://localhost:3001/example" method="POST">
                    <label for="fname">First Name</label><br/>
                    <input type="text" name="FirstName" id="fname" /><br/><br/>
                    <label for="startD">Last Name</label><br/>
                    <input type="text" name="LastName" id="lname" /><br/><br/>
                    <label for="address">Address </label><br/>
                    <input type="text" name="Address" id="address"/><br/><br/>
                    <label for="EAddress">Email Address </label><br/>
                    <input type="email" name="EmailAddress" id="EAddress"/><br/><br/>
                    <label for="phone_number">Mobile Number</label><br/>
                    <input type="number" name="MobileNo" id="phone_number"/><br/><br/>
                    <label for="DOB">Date of Birth </label><br/>
                    <input type="text" name="DoB" id="DOB"/><br/><br/>
                    <label for="MotherMaiden">Mother Maiden </label><br/>
                    <input type="text" name="MotherMaiden" id="MotherMaiden"/><br/><br/>
                    <button type="submit" className="send">Send</button>
                </form>
            </div>
        )
    }
})
export default AccountOpening_BVN;