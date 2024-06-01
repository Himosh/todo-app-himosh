import React, { useContext, useState, useEffect } from 'react';
import './Task.css';
import Pagination from '@mui/material/Pagination';
import { DataContext } from '../../dataContext';
import PriorityHigh from '../../assets/Priority-High.svg';
import PriorityMedium from '../../assets/Priority-Medium.svg';
import PriorityLow from '../../assets/Priority-Low.svg';

const ITEMS_PER_PAGE = 8;

function Task() {
  const { data, loading, error } = useContext(DataContext);
  const [page, setPage] = useState(1);
  const [tasks, setTasks] = useState(data);

  useEffect(() => {
    setTasks(data);
  }, [data]);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'HIGH':
        return PriorityHigh;
      case 'MEDIUM':
        return PriorityMedium;
      case 'LOW':
        return PriorityLow;
      default:
        return null;
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleMarkAsDone = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedTasks = tasks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="task-container">
      <div className="task-title">
        <h1>Tasks</h1>
      </div>
      {selectedTasks.map((task) => (
        <div key={task.id} className="task-details">
          <div className="details-left">
            <img src={getPriorityIcon(task.priority)} alt="priority" />
            <div className="details-title">
              <h2>{task.todo}</h2>
              {!task.completed && (
                <p className="mark-as-done" onClick={() => handleMarkAsDone(task.id)}>
                  Mark as done
                </p>
              )}
            </div>
          </div>
          <div className="task-status-container">
            <div className={`task-status ${task.completed ? 'completed' : 'in-progress'}`}>
              <p>{task.completed ? 'Done' : 'In-Progress'}</p>
            </div>
            <p className="task-date">{formatDate(task.createdAt)}</p>
          </div>
        </div>
      ))}
      <div className="pagination-container">
        <Pagination
          count={Math.ceil(tasks.length / ITEMS_PER_PAGE)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
}

export default Task;
