export const ACTIONS = { SET_ACTIVITIES: 'SET_ACTIVITIES', ADD_ACTIVITY: 'ADD_ACTIVITY', DELETE_ACTIVITY: 'DELETE_ACTIVITY', SET_ERROR: 'SET_ERROR' };
export const initialState = { activities: [], loading: false, error: null };
export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_ACTIVITIES: return { ...state, activities: action.payload, loading: false };
    case ACTIONS.ADD_ACTIVITY: return { ...state, activities: [...state.activities, action.payload] };
    case ACTIONS.DELETE_ACTIVITY: return { ...state, activities: state.activities.filter(a => a.activityId !== action.payload) };
    case ACTIONS.SET_ERROR: return { ...state, error: action.payload, loading: false };
    default: return state;
  }
};
