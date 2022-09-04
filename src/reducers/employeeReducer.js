export const employeeReducer = (state,action)=>{
  switch(action.type){
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees:[...state.employees,action.payload]
      }
    case 'REMOVE_EMPLOYEE':
      let newEmployees = state.employees.filter((employee)=>employee.id !== action.payload);
      return {
        ...state,
        employees:newEmployees
      }
    case 'UPDATE_EMPLOYEE':
      state.employees.find((employee,index)=>{
        if(employee.id === action.payload.id){
          state.employees[index] = action.payload
        }
      })
      return{
        ...state
      }
    case 'SET_SELECTED_EMPLOYEE':
      return{
        ...state,
        selectedEmployee:action.payload
      }
    case 'OPEN_MODAL':
      return{
        ...state,
        showModal:true,
        modalState:action.payload
      }
    case 'CLOSE_MODAL':
      return{
        ...state,
        showModal:false,
        selectedEmployee:{}
      }
    case 'SORT':
      if(action.payload > 0){
        return{
          ...state,
          employees:state.employees.sort((a,b)=>{
            return a.salary - b.salary
          })
        }
      }else{
        return{
          ...state,
          employees:state.employees.sort((a,b)=>{
            return b.salary - a.salary
          })
        }
      }
      
    default:
      return state
  }
}