import React,{useContext} from 'react'
import { EmployeeContext } from '../context/EmployeeContext'

import TableRow from './TableRow';

function Table() {
  const {state,filterState} = useContext(EmployeeContext);
  
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>Employee name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state?.employees.map((employee)=>{ 
            if(filterState.frontendCheck && !filterState.backendCheck && employee.department == 'backend'){
              return
            }else if(filterState.backendCheck && !filterState.frontendCheck && employee.department == 'frontend'){
              return
            }
            return(
            <TableRow key={employee.id} employee={employee}/>
            )}
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table