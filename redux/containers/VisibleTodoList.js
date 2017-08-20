import {connect} from "react-redux";
import {toggleTodo} from "../actions"
import TodoList from "../components/TodoList"
//根据不同的filter状态，处理todos显示状态的函数，返回过滤后的todos；使用了数组filter方法
const getVisibleTodos=(todos,filter)=>{
    switch (filter){
        case "SHOW_ALL":
            return todos;
        case "SHOW_ACTIVE":
            return todos.filter(t=>!t.completed);
        case "SHOW_COMPLETED":
            return todos.filter(t=>t.completed);
    }
}
const mapStateToProps= (state)=>{
    return{
        todos:getVisibleTodos(state.todos,state.visibilityFilter)
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        onTodoClick:(id)=>{
            dispatch(toggleTodo(id))
        }
    }
};
const VisibleTodoList=connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
export default VisibleTodoList;