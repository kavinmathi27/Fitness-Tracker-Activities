import { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { ACTIONS } from '../Reducer/AppReducer';

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getActivityById, dispatch } = useContext(AppContext);
  const activity = getActivityById(id);

  if (!activity) return <div className="page"><p>Activity not found.</p></div>;

  const handleDelete = () => { dispatch({ type: ACTIONS.DELETE_ACTIVITY, payload: id }); navigate('/activities'); };

  return (
    <div className="page" data-testid="activity-item">
      <h2>{activity.name}</h2>
      <p>{activity.date} | {activity.steps.toLocaleString()} steps |{activity.caloriesBurned} kcal | {activity.workoutMinutes} min</p>
      <p>Goal: {activity.goalAchieved ? 'Yes' : 'No'} | {activity.activityId}</p>
      <button onClick={handleDelete}>🗑 Delete</button>
    </div>
  );
};

export default ActivityDetail;
