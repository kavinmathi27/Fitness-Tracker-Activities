import { useParams, useNavigate } from 'react-router-dom';
import { useAppContext } from '../Context/AppContext';
import { ACTIONS } from '../Reducer/AppReducer';

export default function ActivityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getActivityById, dispatch } = useAppContext();
  const a = getActivityById(id);
  if (!a) return <p>Not found</p>;
  return (
    <div className="page" data-testid="activity-item">
      <h2>Details</h2>
      <div className="card">
        <h3>{a.name}</h3>
        <p>{a.date} | {a.steps} steps | {a.caloriesBurned} kcal | {a.workoutMinutes} min</p>
        <p>Goal: {a.goalAchieved ? 'Yes' : 'No'}</p>
        <button onClick={() => { dispatch({ type: ACTIONS.DELETE_ACTIVITY, payload: a.activityId }); navigate(-1); }}>Delete</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
