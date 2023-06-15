import { async } from "@firebase/util";
import { instance } from "./axios";

export const POST_CLOTH = async (cloth,url) => {
await instance.post("cloth",cloth)
}
export const POST_TRAVEL = async (travel) => {
    await instance.post("travel",travel)
}
export const POTS_SUMMER = async (summer) => {
    await instance.post("summer",summer)
}
export const GET_CLOTH = async () => {    
    let reponse = await instance.get("cloth")
    return reponse.data
}
export const GET_TRAVEL = async () => {
    let reponse = await instance.get("travel")
    return reponse.data
}
export const GET_SUMMER = async () => {
    let reponse = await instance.get("summer")   
    return reponse.data
}
export const DELETE_PRODUCT = async (id) => {
    await instance.delete("cloth/" + id )
}
export const EDIT_PRODUCT = async (editProduct) => {
 await instance.patch("cloth/" + editProduct.id,editProduct )
}
export const SEARCH_PRODUCT = async (searchData) => {
   let reponse = await instance.get("cloth?productName_like=" + searchData)
   return reponse.data
}