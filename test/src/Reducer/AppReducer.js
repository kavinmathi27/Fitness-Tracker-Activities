
export const ACTIONS = {
  SET_ACTIVITIES: 'SET_ACTIVITIES',
  ADD_ACTIVITY: 'ADD_ACTIVITY',
  UPDATE_ACTIVITY: 'UPDATE_ACTIVITY',
  DELETE_ACTIVITY: 'DELETE_ACTIVITY',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR'
};


export const initialState = {
  activities: [],
  loading: false
};


export const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_ACTIVITIES:
      return {
        ...state, activities: action.payload, loading: false,
      };

    case ACTIONS.ADD_ACTIVITY:
      return {
        ...state, activities: [...state.activities, action.payload], loading: false,
        
      };

    case ACTIONS.UPDATE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.map(activity =>
          activity.activityId === action.payload.activityId
            ? action.payload
            : activity
        ),
        loading: false,
      };

    case ACTIONS.DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          activity => activity.activityId !== action.payload
        ),
        loading: false,
      };

    case ACTIONS.SET_LOADING:
      return {
        ...state, loading: action.payload
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
