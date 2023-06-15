import { async } from "@firebase/util";
import { instance } from "./axios";
export const PRODUCT_CART = async (productCart) => {
    await instance.post("productCart",productCart)
}
export const GET_PRODUCT_CART = async () => {

 let reponse =   await instance.get("productCart")
 return reponse.data
}
export const SHOPPING_CART = async (user) => {

  let reponse =  await instance.get("productCart?userId_like=" + user.id)
  console.log("reponse",reponse.data);
  return reponse.data
}
export const PUT_QUANTITY = async (product) => {
  await instance.patch("productCart/" + product.id,product)
}
export const PATCH_PRODUCT_CART = async (product) => {
  await instance.patch("productCart/" + product.id,product)
}
export const DELETE_CART = async (id) => {
  await instance.delete("productCart/" + id)
}
export const CLEAR_CART = async (cartId) => {

  await instance.delete("productCart/" + cartId)
}