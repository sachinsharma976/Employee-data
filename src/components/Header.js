import React,{useContext} from 'react'
import { EmployeeContext } from '../context/EmployeeContext'
import { openModal } from '../actions/actions'

function Header() {
  const {dispatch} = useContext(EmployeeContext)
  const handleClick = ()=>{
    dispatch(openModal('Add Employee'))
  }
  return (
    <header>
      <h1>Employees</h1>
      <button className='btn' onClick={handleClick}>Add Employee</button>
    </header>
    
  )
}

export default Header