import React from 'react';
import createReactClass from 'create-react-class';
import './intrabank.css';
import encrypt from'jsencrypt';
import Axios from 'axios'



var IntraBank = createReactClass({
    
    getInitialState: function(){
        return{
            AccountToCredit: "",
            AccountToDebit: "",
            Amount: "",
            AuthValue: ""
        }
    },
    handleOnChange: function(e){
        var name = e.target.name
        this.setState({
            [e.target.name]: e.target.value
        })
    },
    post: function(e){
        
        e.preventDefault()
               const data = {
                 AccountToCredit: this.state.AccountToCredit,
                  AccountToDebit: this.state.AccountToDebit,
                  Amount: this.state.Amount,
                  AuthValue: this.state.AuthValue
              }  

            
              const use = {
                  "userId": 234,
                  "id": 344,
                  "title": "am good",
                  "body": "all"
              }
              
        
            
            Axios.post('http://localhost:3001/', JSON.stringify(data)).then((res)=>{
                if (res){
                    alert('success transaction complete')
                }
                
            }).catch(function(error){
                
                alert("this is wrong")
            })
            //else{
            //     alert('something went wrong')
            // }

        //alert("end")
        },

    render: function(){

        return(
            <div className="intrabank">
                <form  onSubmit={this.post}>
                    <label for="accountC">Account to Credit  </label><br/>
                    <input type="number" name="AccountToCredit" id="accountC" onChange = {this.handleOnChange} /><br/><br/>
                    <label for="accountD">Account to Debit  </label><br/>
                    <input type="number" name="AccountToDebit" id="accountD" onChange = {this.handleOnChange} /><br/><br/>
                    <label for="amount">Amount  </label><br/>
                    <input type="number" name="Amount" id="amount" onChange = {this.handleOnChange}/><br/><br/>
                    <label for="authValue">Authentication Value</label><br/>
                    <input type="number" name="AuthValue" id="authValue" onChange = {this.handleOnChange}/><br/><br/>
        
                    <button type="submit" className="send">Send</button>
                </form>
            </div>
        )
    }
})
export default IntraBank;