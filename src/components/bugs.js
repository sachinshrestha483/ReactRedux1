import { Component } from "react";
import { connect } from "react-redux";
import StoreContext from "../contexts/storeContext";
import bugAdded from "../Store/Domain/Bug/reducer"

class Bugs extends Component {
  // static contextType= StoreContext;

  componentDidMount() {
    //connect;
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <h1 key={bug.id}>{bug.description}</h1>
        ))}
      </ul>
    );
  }
}


const mapStateToProps=(state)=>({
bugs:state.domainReducer.bug
})

const mapDispatchToProps=(dispatch)=>({
getBugs:()=>dispatch(bugAdded()) 
})



export default connect(mapStateToProps,mapDispatchToProps)(Bugs)

// export default Bugs;
