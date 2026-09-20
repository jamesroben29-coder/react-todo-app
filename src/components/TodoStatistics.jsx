import { Layers, Clock, CircleCheck } from "lucide-react";

const TodoStatistics = ({ todos }) => {
  const totalTasks = todos.length;
  const activeTasks = todos.filter((todo) => !todo.completed).length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  return (
    <div className="statistics-container">
      <div className="stat-list">
        <div className="stat-card">
          <div className="icon-wrapper icon-total1">
            <Layers
              size={22}
              color="var(--primary)"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <div className="stat-info">
            <span className="stat-title">Total Tasks</span>
            <span className="stat-value">{totalTasks}</span>
            <span className="stat-desc">All your tasks</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-wrapper icon-total2">
            <Clock
              size={22}
              color="var(--success)"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <div className="stat-info">
            <span className="stat-title">Active Tasks</span>
            <span className="stat-value">{activeTasks}</span>
            <span className="stat-desc">Tasks in progress</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon-wrapper icon-total3">
            <CircleCheck
              size={22}
              color="var(--purple)"
              strokeWidth={2}
              aria-hidden="true"
            />
          </div>

          <div className="stat-info">
            <span className="stat-title">Completed Tasks</span>
            <span className="stat-value">{completedTasks}</span>
            <span className="stat-desc">Great job!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoStatistics;