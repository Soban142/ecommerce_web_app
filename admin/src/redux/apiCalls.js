import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods.js";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductFailure,
  updateProductSuccess,
  updateProductStart,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux.js";

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

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    console.log(res.data.data);
    dispatch(getProductSuccess(res.data.data));
  } catch (error) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    // dispatch(deleteProductSuccess(res.data.data));
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // const res = await userRequest.put(`/products/${id}`);
    // dispatch(updateProductSuccess(res.data.data));
    dispatch(updateProductSuccess({ id, product }));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    // dispatch(addProductSuccess(res.data.data));
    dispatch(addProductSuccess(res.data.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};
