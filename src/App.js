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
      {id: '80d56852-8776-4e5e-9fc9-75f41ef4e086', name: 'sachin', department: 'frontend', salary: '1234'},
      {id: '31dc96eb-c023-420f-8b8f-0ce89ed8df45', name: 'saurabh', department: 'backend', salary: '1234'},
      {id: '94704858-0dd6-4ed8-9b50-0948ed939e29', name: 'avnish', department: 'frontend', salary: '1212'}
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