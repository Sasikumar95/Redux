import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverData:[],
      title:"",
      body:""
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => 
        this.setState({
          serverData: data
        }));
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
export default App;
