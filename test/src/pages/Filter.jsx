import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const Filter = () => {
  const { getFilteredActivities } = useContext(AppContext);
  const [criteria, setCriteria] = useState({ name: '', goalAchieved: undefined, minCalories: '', maxCalories: '', startDate: '', endDate: '' });

  const filtered = getFilteredActivities(criteria);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCriteria(prev => ({ ...prev, [name]: type === 'checkbox' ? (checked ? true : undefined) : (value === '' ? undefined : value) }));
  };

  return (
    <div>
      <h2>Filter Activities</h2>
      <input name="name" placeholder="Search by name" onChange={handleChange} />
      <input name="minCalories" type="number" placeholder="Min Calories" onChange={handleChange} />
      <input name="maxCalories" type="number" placeholder="Max Calories" onChange={handleChange} />
      <input name="startDate" type="date" onChange={handleChange} />
      <input name="endDate" type="date" onChange={handleChange} />
      <label><input name="goalAchieved" type="checkbox" onChange={handleChange} /> Goal Achieved Only</label>
      <button onClick={() => setCriteria({ name: '', goalAchieved: undefined, minCalories: '', maxCalories: '', startDate: '', endDate: '' })}>Reset</button>

      <h3>Results ({filtered.length})</h3>
      {filtered.length === 0 && <p>No activities match.</p>}
      <ul>
        {filtered.map(a => (
          <li key={a.activityId} data-testid="activity-item">
            <Link></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;