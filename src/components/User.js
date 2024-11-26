import { useState } from "react";
const User = (props) =>{
    const [count1]=useState(0);
    const [count2]=useState(1);
    const {name}= props;
    return( 
    <div className="user-card">
        <h1>Count = {count1}</h1>
        <h2>Name: {name}</h2>
        <h2>Location: Bhubneswar</h2>
        <h2>Contact: xyz@gmail.com</h2>
    </div>
    )
}
export default User;

//This is a function component.