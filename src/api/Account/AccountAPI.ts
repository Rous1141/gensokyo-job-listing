import { axiosCreate } from "../AxiosCRUD";
import { baseUrl, header } from "../template";
import { AccountProps, AccountPropsCreate } from "./IAccount";
const accountUrl = baseUrl+"/account"

export const RegisterAccount = async (data: AccountPropsCreate):Promise<any> => {
    const props = {
        data: data,
        url: accountUrl,
        headers: header
    }
    const result = await axiosCreate(props)
    if (result.success) {
        //console.log(result.data)
        return result.data
    }
    else {
        console.log(result.error)
        return null
    }

}
export const FetchAccount = async ():Promise<AccountProps[]> => {
    const props = {
        data: null,
        url: accountUrl,
        headers: header
    }
    const result = await axiosCreate(props)
    if (result.success) {
        //console.log(result.data)
        return result.data
    }
    else {
        console.log(result.error)
        return []
    }
}
export const FetchAccountById = async ():Promise<AccountProps|null> => {
    const props = {
        data: null,
        url: accountUrl,
        headers: header
    }
    const result = await axiosCreate(props)
    if (result.success) {
        //console.log(result.data)
        return result.data
    }
    else {
        console.log(result.error)
        return null
    }

}