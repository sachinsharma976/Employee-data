import React,{useContext,useState} from 'react'
import { EmployeeContext } from '../context/EmployeeContext'
import { setDepartment, sortBy } from '../actions/actions'

function Filters() {
  const {dispatch,filterDispatch} = useContext(EmployeeContext)
 
  const handleChange = (e)=>{
    filterDispatch(setDepartment(e.target.value))
  }

  const sort = (e)=>{
    dispatch(sortBy(e.target.value))
  }
  return (
    <div className='filters'>
      <select onChange={sort}>
        <option hidden>Sort by </option>
        <option value={1}>Lowest salary</option>
        <option value={-1}>Highest salary</option>
      </select>
      <div onChange={handleChange}>
        <input type='checkbox'  value='frontend'/>Frontend
        <input type='checkbox' value='backend'/>Backend
      </div>
      
    </div>
    
  )
}

export default Filters