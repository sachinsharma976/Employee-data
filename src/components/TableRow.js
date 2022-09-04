import React, { useContext } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'
import { openModal, removeEmployee, setSelectedEmployee } from '../actions/actions'

function TableRow({ employee }) {
  const { dispatch, state } = useContext(EmployeeContext)
  const deleteUser = (id) => {
    dispatch(removeEmployee(id))
  }

  const updateUser = (id) => {
    let user = state.employees.find((employee) => employee.id == id);
    dispatch(setSelectedEmployee(user))
    dispatch(openModal('Update Employee'))
  }

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.salary}</td>
      <td>
        <button onClick={() => updateUser(employee.id)}>Update</button>
        <button onClick={() => deleteUser(employee.id)}>Delete</button>
      </td>
    </tr>
  )
}

export default TableRow