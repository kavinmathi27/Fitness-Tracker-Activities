import { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { ACTIONS } from '../Reducer/AppReducer';

const ActivityDetail = () => {
  const { id } = useParams();
  const { getActivityById, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const activity = getActivityById(id);

  if (!activity) return <p>Activity not found.</p>;

  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_ACTIVITY, payload: activity.activityId });
    navigate('/activities');
  };

  return (
    <div>
      <h2>Activity Detail</h2>
      <p><strong>Name:</strong> {activity.name}</p>
      <p><strong>Steps:</strong> {activity.steps}</p>
      <p><strong>Calories Burned:</strong> {activity.caloriesBurned}</p>
      <p><strong>Workout Minutes:</strong> {activity.workoutMinutes}</p>
      <p><strong>Goal Achieved:</strong> {activity.goalAchieved ? 'Yes' : 'No'}</p>
      <p><strong>Date:</strong> {activity.date}</p>
      <button onClick={handleDelete}>Delete Activity</button>
      <button onClick={() => navigate('/activities')}>Back</button>
    </div>
  );
};

export default ActivityDetail;
