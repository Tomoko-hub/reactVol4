import React, {Component} from "react";
import Child from "./Components/Child";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      parentValue:100
    };
  }

  //from children to parent
  addValueParent(value){
    const newValue = this.state.parentValue + value;
    this.setState({parentValue:newValue});
  }

  render(){
    return(
      <Child pval={this.state.parentValue} //from parent to children
             add={this.addValueParent.bind(this)}></Child> //from children to parent
    );
  }
}
export default App;
