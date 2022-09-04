import React, { useReducer } from 'react'
import './App.css'
import Modal from './components/Modal'
import Table from './components/Table'
import { employeeReducer } from './reducers/employeeReducer'
import { filterReducer } from './reducers/filterReducer'
import { EmployeeContext } from './context/EmployeeContext'
import Header from './components/Header'
import Filters from './components/Filters'


function App() {
  const employeeReducerInitialState = {
    selectedEmployee:{},
    showModal:false,
    modalState:'',
    employees:[
      {name: 'fredie', department: 'frontend', salary: '5293293', id: '60421471-1bdc-4228-8c5a-01a2338df925'},
      {name: 'piyush yadav', department: 'backend', salary: '276347', id: '0e61b832-61ef-4d94-816e-2b52e848f9f7'},
      {name: 'sagar sharma', department: 'backend', salary: '127382', id: '70aa8f27-1f42-4bb7-a292-50d160820443'},
      {name: 'satyam', department: 'backend', salary: '99999', id: '356c78df-5c35-4d55-901c-6bb9929138b1'},
      {name: 'karan', department: 'backend', salary: '67442', id: '3b95a65d-d14c-41b3-8b82-6a6e5dd6e861'},
      {name: 'sachin sharma', department: 'frontend', salary: '1234', id: '80d56852-8776-4e5e-9fc9-75f41ef4e086'},
      {id: '94704858-0dd6-4ed8-9b50-0948ed939e29', name: 'avnish', department: 'frontend', salary: '1212'},
    ]
  }
  const filterInitialState = {
    frontendCheck:false,
    backendCheck:false
  }
  const [state,dispatch] = useReducer(employeeReducer,employeeReducerInitialState)
  const [filterState,filterDispatch] = useReducer(filterReducer,filterInitialState)

  return (
    <EmployeeContext.Provider value={{state,dispatch,filterDispatch,filterState}}>
      <div className='App'>
        <Header />
        {state.showModal && <Modal /> }
        <Filters />
        <Table />
      </div>
    </EmployeeContext.Provider>
  )
}

export default App