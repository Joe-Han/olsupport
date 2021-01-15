import React from "react"
import { Route } from "react-router-dom"
import GitHub from "./GitHub/GitHub"

export default class Nav extends React.Component{
    render(){
        return(
            <div >
                <Route path="/GitHub" component={GitHub}></Route>
            </div>
        )
    }
}