import { useEffect } from 'react';
import { useAppContext } from '../Context/AppContext';

export default function Stats() {
  const { activities } = useAppContext();
  const totalActivities = activities.length;
  const goalAchievedCount = activities.filter(a => a.goalAchieved).length;
  const goalNotAchievedCount = totalActivities - goalAchievedCount;

  useEffect(() => {
    window.appState = { totalActivities, goalAchievedCount, goalNotAchievedCount };
  }, [activities, totalActivities, goalAchievedCount, goalNotAchievedCount]);

  return (
    <div className="page">
      <h2>Stats</h2>
      <div className="stats card">
        <p>Total: <strong data-testid="total-activities">{totalActivities}</strong></p>
        <p>Achieved: <strong data-testid="goal-achieved">{goalAchievedCount}</strong></p>
        <p>Missed: <strong data-testid="goal-not-achieved">{goalNotAchievedCount}</strong></p>
      </div>
    </div>
  );
}
