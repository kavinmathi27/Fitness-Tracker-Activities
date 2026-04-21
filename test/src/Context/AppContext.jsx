import { createContext, useReducer } from 'react';
import { appReducer, initialState } from '../Reducer/AppReducer';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Derived helpers — never stored in state
  const getActivityById = (id) =>
    state.activities.find((a) => a.activityId === id);

  const getFilteredActivities = ({ name, goalAchieved, minCalories, maxCalories, startDate, endDate }) =>
    state.activities.filter((a) => {
      if (name && !a.name.toLowerCase().includes(name.toLowerCase())) return false;
      if (goalAchieved !== undefined && a.goalAchieved !== goalAchieved) return false;
      if (minCalories !== undefined && minCalories !== '' && a.caloriesBurned < Number(minCalories)) return false;
      if (maxCalories !== undefined && maxCalories !== '' && a.caloriesBurned > Number(maxCalories)) return false;
      if (startDate && a.date < startDate) return false;
      if (endDate && a.date > endDate) return false;
      return true;
    });

  return (
    <AppContext.Provider value={{ state, dispatch, getActivityById, getFilteredActivities }}>
      {children}
    </AppContext.Provider>
  );
};
