export default function usersReducer(state = {}, action){

    switch(action.type){
        case "GET_ALL_POST_ASYNC":
            return {
                ...state,
                posts : action.payload
            }       
        default : 
            return state
    }
    
}