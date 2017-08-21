import {connect} from "react-redux";
import {setVisibility}from "../actions"
import Link from "../components/Link"

const mapStateToProps=(state,ownProps)=>{
    return {
        //判断点击时传进来的filter和状态的filter是否相等
        active:ownProps.filter===state.visibilityFilter
    }
};
const mapDispatchToProps=(dispatch, ownProps) =>{
    return{
        onClick:()=>{
            dispatch(setVisibility(ownProps.filter));
            console.log(setVisibility(ownProps.filter));

        }
    }
};

const FilterLink =connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink;
