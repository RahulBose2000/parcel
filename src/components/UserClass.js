import React from "react";

class UserClass extends React.Component {

  //constructor
  constructor(props) {
    super(props);
    this.state = { 
      userInfo:{
        name:'dummy name',
        location:'default loc',
        
      },
    }
    console.log('child constructor');
  }

  async componentDidMount(){
    // console.log('class component did mount')
    const data = await fetch(' https://api.github.com/users/RahulBose2000');
    const json = await data.json();
    console.log(json);

    //updating cycle starts 
    this.setState({
      userInfo:json,
    });
}
componentDidUpdate(){
  console.log('component did update')
}
  render() {
    // console.log('child render');
    
    const {name,location,avatar_url}=this.state.userInfo;
    return (
      <div className="user-card">
        
        <img src={avatar_url} alt="loading"></img>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: xyz@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
//This is a class based component
