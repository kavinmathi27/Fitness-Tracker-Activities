import { createContext, useContext, useReducer, useEffect } from "react";
import { appReducer, initialState, ACTIONS } from "../Reducer/AppReducer";
import { getToken, getDataset } from "../services/api";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useEffect(() => {
    getToken("E0223016", "402907", "setB")
      .then(r => getDataset(r.token, r.dataUrl))
      .then(p => dispatch({ type: ACTIONS.SET_ACTIVITIES, payload: p }))
      .catch(e => dispatch({ type: ACTIONS.SET_ERROR, payload: e.message }));
  }, []);
  const getActivityById = (id) => state.activities.find(a => String(a.activityId) === String(id));
  const getFilteredActivities = (c) => state.activities.filter(a => (!c.name || a.name.toLowerCase().includes(c.name.toLowerCase())));
  return <AppContext.Provider value={{ ...state, dispatch, getActivityById, getFilteredActivities }}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext);