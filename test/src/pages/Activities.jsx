import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext';
import { ACTIONS } from '../Reducer/AppReducer';

export default function Activities() {
  const { activities, dispatch } = useAppContext();
  const [f, setF] = useState({ name: '', steps: '', caloriesBurned: '', workoutMinutes: '', goalAchieved: false, date: '' });
  const h = (e) => setF({ ...f, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const s = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_ACTIVITY, payload: { ...f, activityId: Date.now(), steps: +f.steps, caloriesBurned: +f.caloriesBurned, workoutMinutes: +f.workoutMinutes } });
    setF({ name: '', steps: '', caloriesBurned: '', workoutMinutes: '', goalAchieved: false, date: '' });
  };
  return (
    <div className="page">
      <h2>Activities</h2>
      <form onSubmit={s} className="activity-form card">
        <input name="name" placeholder="Activity Name" value={f.name} onChange={h} required />
        <input name="date" type="date" value={f.date} onChange={h} required />
        <input name="steps" type="number" placeholder="Steps" value={f.steps} onChange={h} />
        <label><input name="goalAchieved" type="checkbox" checked={f.goalAchieved} onChange={h} /> Goal Achieved</label>
        <button type="submit">Add</button>
      </form>
      <h3>All Activities</h3>
      <ul className="activity-list">
        {activities.map(a => (
          <li key={a.activityId} className="activity-item card" data-testid="activity-item">
            <Link to={`/activities/${a.activityId}`}><strong>{a.name}</strong> — {a.date}</Link>
            <p>{a.steps} steps | {a.caloriesBurned} kcal | Goal: {a.goalAchieved ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
