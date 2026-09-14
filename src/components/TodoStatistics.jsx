
import { Layers, Clock, CircleCheck } from 'lucide-react';
import React from 'react'

const TodoStatistics = ({todos, }) => {

    const totalTask = todos.length;

    const activeTask = todos.filter((todo) => !todo.completed).length;

    const completedTask = todos.filter((todo) => todo.completed).length;

  return (
    <div className='statistics-container'>
        <div className="stat-list">
            
            <div className="stat-card">
                <div className="icon-wrapper icon-total1">
                    <Layers size={22} color="var(--primary)" strokeWidth={2} />
                </div>
                <div className="stat-info">
                    <span className="stat-title">Total Tasks</span>
                    <span className="stat-value">{totalTask}</span>
                    <span className="stat-desc">All your tasks</span>
                </div>
            </div>

            <div className="stat-card">
                <div className="icon-wrapper icon-total2">
                    <Clock size={22} color="var(--success)" strokeWidth={2} />
                </div>
                <div className="stat-info">
                    <span className="stat-title">Active Tasks</span>
                    <span className="stat-value">{activeTask}</span>
                    <span className="stat-desc">Tasks in progress</span>
                </div>
            </div>
            <div className="stat-card">
                <div className="icon-wrapper icon-total3">
                    <CircleCheck size={22} color="var(--purple)" strokeWidth={2} />
                </div>
                <div className="stat-info">
                    <span className="stat-title">Completed Tasks</span>
                    <span className="stat-value">
                        {completedTask}

                    </span>
                    <span className="stat-desc">Great jobs</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TodoStatistics;