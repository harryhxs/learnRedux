
//筛选的响应,返回的是一个字符串
const visibilityFilter=(state="SHOW_ALL",action)=>{
    switch(action.type){
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state
    }
};
export default visibilityFilter