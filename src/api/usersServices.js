import { async } from "@firebase/util"
import { instance } from "./axios"
export const POST_USER = async (newUser) => {
    await instance.post("users",newUser)
}
export const GET_USER = async () => {
    let reponse = await instance.get("users")
    return reponse.data
}
export const LOGIN = async (action) => {
let reponse = await instance.get("users?email=" + action.email+"&password=" + action.password)
return reponse.data
}
export const PUT_USER = async (newUser) => {
    await instance.put("users/" + newUser.id,newUser)
}
export const BLOCK_USER = async (userId) => {
    console.log(userId);

    await instance.patch("users/" + userId.userId,{"status":userId.status})
}