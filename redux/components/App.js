import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";
import React from "react";
//顶层标签组件
const App=()=>(
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);
export default App;