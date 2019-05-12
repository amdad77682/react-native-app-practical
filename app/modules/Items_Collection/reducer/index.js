const INITIAL_STATE = {
  itemList: {}
};

export const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALBUMS_RESOLVED":
      return {
        ...state,
        itemList: action.payload
      };
    default:
      return state;
  }
};
