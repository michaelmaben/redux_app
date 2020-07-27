import {connect} from "react-redux";
import Counter from "./counter";

// will be called when anything changes in store
function mapStateToProps(state){
  return {
    countValue: state.count
  }
}

// actions
var increaseAction = {
  type: "increase"
}
var decreaseAction = {
  type: "decrease"
}

function mapDispatchToProps(dispatch){
  return {
    counterPlus: function(){
      return dispatch(increaseAction);
    },
    counterMinus: function(){
      return dispatch(decreaseAction);
    }
  };
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default connectedComponent;
