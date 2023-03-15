import { ADDTOFAVORITE } from "./action";
import { FAVOURITE_REMOVED } from "./action";

export const addFavorite = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADDTOFAVORITE,
      payload: id,
    });
  };
};

export const removeFavourite = (id) => {
  return (dispatch) => {
    dispatch({
      type: FAVOURITE_REMOVED,
      payload: id,
    });
  };
};
