export const addEmployee = (payload)=>{
  return {type:'ADD_EMPLOYEE',payload}
}

export const removeEmployee = (payload)=>{
  return {type:'REMOVE_EMPLOYEE',payload}
}

export const updateEmployee = (payload)=>{
  return {type:'UPDATE_EMPLOYEE',payload}
}

export const setSelectedEmployee = (payload)=>{
  return {type:'SET_SELECTED_EMPLOYEE',payload}
}

export const openModal = (payload)=>{
  return {type:'OPEN_MODAL',payload}
  
}

export const closeModal = ()=>{
  return {type:'CLOSE_MODAL'}
}

export const sortBy = (payload)=>{
  return {type:'SORT',payload}
}

export const setDepartment = (payload)=>{
  return {type:'SET_DEPARTMENT_FILTER',payload}
}