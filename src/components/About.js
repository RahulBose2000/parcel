import React from "react";

import User from "./User";

import UserClass from "./UserClass";
class  About extends React.Component{

    constructor(props){
        super(props)


        // console.log('parent constructor')
    }
    componentDidMount(){
        // console.log('Parent component did mount')
    }
    render(){
        // console.log('parent render')
    return (
         <div className="about">

        <h1>ABOUT</h1>
        <h2>This is Namaste React </h2>
        {/* <User name={'Shivam functional component'}/> */}
        <UserClass name={'Shivam class based component'}/>
        </div>
    )
}}

export default About;

// this is a class based component