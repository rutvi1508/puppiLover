import {
  AUTH_USER,
  SEARCH_TEXT,
  USER_DETAILS,
  NAVIGATE_PAGE,
} from "../constants";

const initialState = {
  activeTabValue: 1,
  tabFindEvent: {},
};

export default function ActionReducer(state = initialState, action) {
  console.log("action.type", action.type);
  switch (action.type) {
    case AUTH_USER: {
      return { authdata: action.data };
    }
    case USER_DETAILS: {
      return { userDetails: action.data };
    }
    case SEARCH_TEXT: {
      return { searchText: action?.data };
    }
    case NAVIGATE_PAGE: {
      return {
        ...state,
        activeTabValue: action?.payload,
      };
    }

    default:
      return state;
  }
}
