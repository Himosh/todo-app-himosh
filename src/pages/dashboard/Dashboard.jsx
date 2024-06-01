import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import './Dashboard.css'
import Welcome from '../../components/welcome/Welcome'
import Task from '../../components/task/Task'
import Activity from '../../components/activity/Activity'
import TaskPriority from '../../components/task-priorities/TaskPriority'

function Dashboard() {
  return (
    <div className="page-container">
        <div className="page-container-left">
            <Sidebar />
        </div>
        <div className="page-container-right">
            <Header />  
            <Welcome />
            <div className="container-grid">
                <div className="grid-column-one">
                    <Task />
                </div>
                <div className="gird-column-two">
                    <Activity />
                    <TaskPriority />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard