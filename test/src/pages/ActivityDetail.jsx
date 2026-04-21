import { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { ACTIONS } from '../Reducer/AppReducer';

const ActivityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getActivityById, dispatch } = useContext(AppContext);

  const activity = getActivityById(id);

  if (!activity) {
    return (
      <div className="page">
        <div className="empty-state">
          <p>Activity not found.</p>
          <Link to="/activities" className="btn btn-outline">← Back to Activities</Link>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_ACTIVITY, payload: id });
    navigate('/activities');
  };

  return (
    <div className="page">
      <div className="page-header">
        <h2>Activity Detail</h2>
        <Link to="/activities" className="btn btn-outline">← Back</Link>
      </div>

      <div className="detail-card card" data-testid="activity-item">
        <h3 className="detail-title">{activity.name}</h3>
        <div className="detail-grid">
          <div className="detail-row">
            <span className="detail-label">📅 Date</span>
            <span className="detail-value">{activity.date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">👟 Steps</span>
            <span className="detail-value">{activity.steps.toLocaleString()}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">🔥 Calories Burned</span>
            <span className="detail-value">{activity.caloriesBurned} kcal</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">⏱ Workout Minutes</span>
            <span className="detail-value">{activity.workoutMinutes} min</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">🎯 Goal Achieved</span>
            <span className={`badge ${activity.goalAchieved ? 'badge-success' : 'badge-fail'}`}>
              {activity.goalAchieved ? '✅ Yes' : '❌ No'}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">🆔 Activity ID</span>
            <span className="detail-value id-text">{activity.activityId}</span>
          </div>
        </div>
        <button className="btn btn-danger" onClick={handleDelete}>🗑 Delete Activity</button>
      </div>
    </div>
  );
};

export default ActivityDetail;
