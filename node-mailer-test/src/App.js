import React, { Component } from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import axios from 'axios';



class App extends Component {
    constructor(props) {
        super(props)

        this.state =
            {

                senderEmail: "",
                receiverEmail: "",
                message: ""
            }
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });};


    handleSend = () =>{
        console.log(`Sending email`);
        console.log(`Sender Email: ${this.state.senderEmail}`);
        console.log(`Receiver Email: ${this.state.receiverEmail}`);
        console.log(`Message: ${this.state.message}`);
       let senderEmail = this.state.senderEmail;
       let receiverEmail = this.state.receiverEmail;
       let message = this.state.message;
        let data = {
            senderEmail,
            receiverEmail,
            message
        }
        axios({
            method: "POST",
            url:"/send",
            data: data
            }
        ).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent.");
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }



    render() {
        return (
            <div className="App">
                <Input name={"senderEmail"} value={this.state.senderEmail} handleChange={this.handleChange} placeholder={"Your E-mail"}/>
                <Input name={"receiverEmail"} value={this.state.receiverEmail} handleChange={this.handleChange} placeholder={"Destination E-mail"}/>
                <Input name={"message"} value={this.state.message} handleChange={this.handleChange} placeholder={"What would you like to say?"}/>
                <Button handleClick={()=>{this.handleSend()}} label={"Send E-mail"}/>
            </div>
        );
    }
}

export default App;
