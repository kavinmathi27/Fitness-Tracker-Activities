import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { ACTIONS } from '../Reducer/AppReducer';

const Activities = () => {
  const { activities, dispatch } = useContext(AppContext);
  const [form, setForm] = useState({ name: '', steps: '', caloriesBurned: '', workoutMinutes: '', goalAchieved: false, date: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date) return;
    dispatch({ type: ACTIONS.ADD_ACTIVITY, payload: { activityId: Date.now(), ...form, steps: Number(form.steps), caloriesBurned: Number(form.caloriesBurned), workoutMinutes: Number(form.workoutMinutes) } });
    setForm({ name: '', steps: '', caloriesBurned: '', workoutMinutes: '', goalAchieved: false, date: '' });
  };

  return (
    <div>
      <h2>Activities</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Activity Name" value={form.name} onChange={handleChange} required />
        <input name="steps" type="number" placeholder="Steps" value={form.steps} onChange={handleChange} />
        <input name="caloriesBurned" type="number" placeholder="Calories Burned" value={form.caloriesBurned} onChange={handleChange} />
        <input name="workoutMinutes" type="number" placeholder="Workout Minutes" value={form.workoutMinutes} onChange={handleChange} />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <label><input name="goalAchieved" type="checkbox" checked={form.goalAchieved} onChange={handleChange} /> Goal Achieved</label>
        <button type="submit">Add</button>
      </form>

      <h3>All Activities</h3>
      {activities.length === 0 && <p>No activities yet.</p>}
      <ul>
        {activities.map(a => (
          <li key={a.activityId} data-testid="activity-item">
            <Link to={`/activities/${a.activityId}`}>{a.name} — {a.date}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
