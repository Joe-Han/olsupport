import React from "react"
import api from "../../Api";
import Repository from "../../Model/Repository";
//import './GitHubContain.css';

let repository:Repository = {
  Org:"MicrosoftDocs",
  Name:"azure-docs-pr"
}

export default class GitHub extends React.Component{
  
  getPRs = () => {
    api.getPullRequest(repository)
    .then(resp => {
      return resp.json()
    }).then(data=>{
      console.log(data)
    })
  }
  
  render(){
    return (
      <div className="GitHubContain">
        <button onClick={this.getPRs}>GetPullRequest</button>
        this is App
      </div>
    );
  }
}
