const initialState = { Fav: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SETADDTOFAVORITE":
      return {
        ...state,
        Fav: [...state.Fav, action.payload],
      };
    default:
      return state;
  }
}
export default reducer;
