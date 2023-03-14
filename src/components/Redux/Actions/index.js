import { ADDTOFAVORITE } from "./action";
export const addFavorite = (id) => {
  return {
    type: ADDTOFAVORITE,
    payload: id,
  };
};
