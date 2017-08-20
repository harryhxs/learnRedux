let nextTodoId=0;
//下面的函数就是不同的action生成器，返回action 这个对象
export const addTodo=(text)=>{
    return{
        type:"ADD_TODO",
        id:nextTodoId++,
        text
    }
};
export const setVisibility=(filter)=>{
    return{
        type:"SET_VISIBILITY_FILTER",
        filter
    }
};
export const toggleTodo=(id)=>{
    return{
        type:"TOGGLE_TODO",
        id
    }
};
