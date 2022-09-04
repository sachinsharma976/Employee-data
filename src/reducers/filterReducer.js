export const filterReducer = (state,action)=>{
  switch(action.type){
    case 'SET_DEPARTMENT_FILTER':
      if(action.payload === 'frontend'){
        return {
          ...state,
          frontendCheck:!state.frontendCheck
        }
      }else{
        return {
          ...state,
          backendCheck:!state.backendCheck
        }
      }
      
    default:
      return state
  }
}