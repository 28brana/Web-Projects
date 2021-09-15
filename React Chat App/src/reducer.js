export const initialState={
    user:null,
    login:false
}

const reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                user:action.user,
                login:action.login
            }
        default:{
            return {...state}
        }
    }
}

export default reducer;