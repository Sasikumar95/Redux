import React, { Component } from "react";
import {connect} from "react-redux";
import {fetchPost} from "../src/actions/postActions"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      body:""
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchPost();
  }

  onChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }


  onSubmit(e){
    e.preventDefault();

    const post={
      title:this.state.title,
      body:this.state.body
    }
    
    fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"POST",
      headers:{
        "context-type":"application/json"
      },
      body:JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data =>console.log(data) )
  }


  render() {
    return (
      <div>
             <h1>Hello world</h1>
             <form onSubmit={this.onSubmit}>
             Title:  <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
               <br/>
             Discription:  <textarea name="body" onChange={this.onChange} value={this.state.body} />
             <button type="submit">
               Submit
             </button>
             </form>
             
             {this.state.serverData.map(item => (
              <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>)
          )}
      </div>
    );
  }
}
export default connect(null,{fetchPost})(App);
