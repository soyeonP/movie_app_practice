import React from "react";



class App extends React.Component{
  constructor(props){
    super(props)
    console.log("constructor")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }
  componentDidUpdate(){
    console.log("compomemt did update")
  }

  componentWillUnmount(){
    console.log("component will dead . unmount")
  }

  state = {
    count :0
  }
  add = () =>{
    this.setState(current=>({
      count : current.count +1
    }))
  }
  minus = () =>{
    this.setState(current=>({
      count : current.count -1
    }))
  }
  render() {
    console.log("render")
    return (
      <div>
        <h2>The number is : {this.state.count}</h2>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
export default App;
