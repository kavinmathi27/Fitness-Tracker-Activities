import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext';

export default function Filter() {
  const { getFilteredActivities } = useAppContext();
  const [c, setC] = useState({ name: '', goalAchieved: undefined, minCalories: '', maxCalories: '', startDate: '', endDate: '' });
  const h = (e) => setC({ ...c, [e.target.name]: e.target.type === 'checkbox' ? (e.target.checked ? true : undefined) : (e.target.value || undefined) });
  const f = getFilteredActivities(c);
  return (
    <div className="page">
      <h2>Filter</h2>
      <div className="filter-controls card">
        <input name="name" placeholder="Name..." value={c.name || ''} onChange={h} />
        <input name="minCalories" type="number" placeholder="Min Cals" value={c.minCalories || ''} onChange={h} />
        <label><input name="goalAchieved" type="checkbox" checked={c.goalAchieved === true} onChange={h} /> Goal Achieved Only</label>
        <button onClick={() => setC({ name: '', goalAchieved: undefined, minCalories: '', maxCalories: '', startDate: '', endDate: '' })}>Reset</button>
      </div>
      <h3>Results ({f.length})</h3>
      <ul className="activity-list">
        {f.map(a => <li key={a.activityId} className="card" data-testid="activity-item"><Link to={`/activities/${a.activityId}`}>{a.name} — {a.date}</Link></li>)}
      </ul>
    </div>
  );
}