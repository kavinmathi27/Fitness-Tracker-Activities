import { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';

const Stats = () => {
  const { activities } = useContext(AppContext);

  const totalActivities = activities.length;
  const goalAchievedCount = activities.filter(a => a.goalAchieved).length;
  const goalNotAchievedCount = activities.filter(a => !a.goalAchieved).length;

  useEffect(() => {
    window.appState = { totalActivities, goalAchievedCount, goalNotAchievedCount };
  }, [activities]);

  return (
    <div>
      <h2>Stats</h2>
      <p>Total Activities: <strong data-testid="total-activities">{totalActivities}</strong></p>
      <p>Goal Achieved: <strong data-testid="goal-achieved">{goalAchievedCount}</strong></p>
      <p>Goal Not Achieved: <strong data-testid="goal-not-achieved">{goalNotAchievedCount}</strong></p>
    </div>
  );
};

export default Stats;
