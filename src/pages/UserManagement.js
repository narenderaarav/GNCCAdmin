import React, { Component } from "react";
import "./Content.css";
import { Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';
import UserList from "../components/user/list"

const PENDING = "Pending";
const APPROVED = "Approved";
const DENY = "Deny";

class UserManagement extends Component{
  state = {
    pending:[],
    approved:[],
    deny:[]
  };


  // componentDidMount() {
  //   axios.get('http://127.0.0.1:5000/users')
  //   .then(response => response.data)
  //    .then(data => {
  //     //this.setState({ users:data})
  //     this.setState({ users: JSON.parse(response.data.body) });
  //     console.log(this.state.users)
  //     })
  //    .catch((err) =>{
  //     console.log("There is an error in API call.", err)
  //   })
  // }

  //for fetching all users Get
  //http://127.0.0.1:5000/users
  // response: all users regardless of approval status

  //for updating approval status Post
  //http://127.0.0.1:5000/users 
  // body {usersList:["2", "3"], approval: "Approved/Deny"}
  // response : {success: true/false}
  
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/users')
  
      .then(res => {
        //JSON.parse(res.data)
        // console.log("data: --- ", res.data.map(item =>  console.log(item)));
        console.log(res.data)
        let users = JSON.parse(res.data.data);
        let pending = [];
        let approved = [];
        let deny = [];
        for(let user of users){
          switch(user.approval){
            case PENDING:
              pending.push(user);
              break;
            case APPROVED:
              approved.push(user)
              break;
            case DENY:
              deny.push(user);
              break;
            default:
              console.log("approval type not defined....", user.approval)
          }
        }
        this.setState({ 
          pending:pending,
          approved:approved,
          deny:deny
        });
      }) 
      
      .catch((err) =>{
        console.log("There is an error in API call.", err)
      })
  }


  handleApprovel = (userListForApprovel) => {
    // Following code only execute after success;

    console.log("user list for approval ", userListForApprovel);
    let pending = [];
    let approved = [...this.state.approved]
    for(let user of this.state.pending){
      if(userListForApprovel.indexOf(user.userid) === -1){
        pending.push(user);
      } else {
        approved.push(user);
      }
    }
    this.setState({
      pending: pending,
      approved: approved
    })
  }


  render(){
    return(
      <>
      <div className="workSection">
        <div className="heading">
          <h1>User Management</h1>
        </div>
        <div className="workAreaBg">
          <div className="formcontainer">
            <div className="showAttendance tabing">
            <Tabs defaultActiveKey="Pending" id="uncontrolled-tab-example">
                <Tab eventKey="Pending" title="Pending">
                  <UserList 
                    users={this.state.pending}  
                    addApproveButton={true}
                    addDenyButton={true}
                    handleApprovel={this.handleApprovel}
                  />
                </Tab>
                <Tab eventKey="proApprovedfile" title="Approved">
                  <UserList 
                    users={this.state.approved}
                    addDenyButton={true} 
                  />
                </Tab>
                <Tab eventKey="Deny" title="Deny">
                  <UserList 
                    users={this.state.deny} 
                    addApproveButton={true}
                  />
                </Tab>
            </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  }
}

export default UserManagement;
