import React,{useRef,useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {EmployeeContext} from '../context/EmployeeContext'
import {addEmployee, closeModal, updateEmployee} from '../actions/actions'

function Form() {
  const {dispatch,state } = useContext(EmployeeContext)

  const defaultValues = state.selectedEmployee

  const nameRef = useRef();
  const departmentRef = useRef();
  const salaryRef = useRef();

  const handleCancel = ()=>{
    dispatch(closeModal())
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    let user = {
      name:nameRef.current.value,
      department:departmentRef.current.value,
      salary:salaryRef.current.value
    }

    if(state.modalState == 'Add Employee'){
      user.id = uuidv4()
      dispatch(addEmployee(user))
    }else{
      user.id = state?.selectedEmployee?.id
      dispatch(updateEmployee(user))
    }

    nameRef.current.value = ''
    departmentRef.current.value = ''
    salaryRef.current.value = ''

    dispatch(closeModal())
  }
  return (
    <div> 
      <p>{state.modalState}</p>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder='Employee name' 
          type="text" ref={nameRef} 
          defaultValue={defaultValues && defaultValues.name} 
          required
        />
        <select 
          placeholder='Departments'
          ref={departmentRef} 
          defaultValue={defaultValues && defaultValues.department} 
          required
        >
          <option value='' hidden>Departments</option>
          <option value='frontend'>Frontend</option>
          <option value='backend'>Backend</option>

        </select>
        <input 
          placeholder='Salary'
          type="text" ref={salaryRef}
          defaultValue={defaultValues && defaultValues.salary} 
          required
        />
        <button type='button' onClick={handleCancel}>Cancel</button>
        <button type='submit'>Submit</button>
      </form>
    </div>  
  )
}

export default Form