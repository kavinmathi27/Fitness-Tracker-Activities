import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { ACTIONS } from '../Reducer/AppReducer';

const emptyForm = {
  name: '',
  steps: '',
  caloriesBurned: '',
  workoutMinutes: '',
  goalAchieved: false,
  date: '',
};

const Activities = () => {
  const { state, dispatch } = useContext(AppContext);
  const [form, setForm] = useState(emptyForm);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date) return;

    const newActivity = {
      activityId: crypto.randomUUID(),
      name: form.name.trim(),
      steps: Number(form.steps) || 0,
      caloriesBurned: Number(form.caloriesBurned) || 0,
      workoutMinutes: Number(form.workoutMinutes) || 0,
      goalAchieved: form.goalAchieved,
      date: form.date,
    };

    dispatch({ type: ACTIONS.ADD_ACTIVITY, payload: newActivity });
    setForm(emptyForm);
    setShowForm(false);
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2>All Activities</h2>
        <button className="btn btn-primary" onClick={() => setShowForm((v) => !v)}>
          {showForm ? '✕ Cancel' : '+ Add Activity'}
        </button>
      </div>

      {showForm && (
        <form className="activity-form card" onSubmit={handleSubmit}>
          <h3>New Activity</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Name *</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Morning Run" required />
            </div>
            <div className="form-group">
              <label>Date *</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Steps</label>
              <input type="number" name="steps" value={form.steps} onChange={handleChange} placeholder="0" min="0" />
            </div>
            <div className="form-group">
              <label>Calories Burned</label>
              <input type="number" name="caloriesBurned" value={form.caloriesBurned} onChange={handleChange} placeholder="0" min="0" />
            </div>
            <div className="form-group">
              <label>Workout Minutes</label>
              <input type="number" name="workoutMinutes" value={form.workoutMinutes} onChange={handleChange} placeholder="0" min="0" />
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input type="checkbox" name="goalAchieved" checked={form.goalAchieved} onChange={handleChange} />
                Goal Achieved
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-submit">Save Activity</button>
        </form>
      )}

      {state.activities.length === 0 ? (
        <div className="empty-state">
          <p>No activities yet. Add your first one!</p>
        </div>
      ) : (
        <ul className="activity-list">
          {state.activities.map((activity) => (
            <li key={activity.activityId} className="activity-item card" data-testid="activity-item">
              <div className="activity-info">
                <h3>{activity.name}</h3>
                <span className="activity-date">📅 {activity.date}</span>
              </div>
              <div className="activity-stats">
                <span>👟 {activity.steps.toLocaleString()} steps</span>
                <span>🔥 {activity.caloriesBurned} kcal</span>
                <span>⏱ {activity.workoutMinutes} min</span>
                <span className={`badge ${activity.goalAchieved ? 'badge-success' : 'badge-fail'}`}>
                  {activity.goalAchieved ? '✅ Goal Met' : '❌ Goal Missed'}
                </span>
              </div>
              <Link to={`/activities/${activity.activityId}`} className="btn btn-outline btn-sm">
                View Details →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Activities;
