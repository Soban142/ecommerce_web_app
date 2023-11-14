import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods.js";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    console.log(res.data.data);
    dispatch(loginSuccess(res.data.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
