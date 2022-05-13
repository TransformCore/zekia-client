/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCookies } from "react-cookie";

const useCookieStorage = () => {
    const [cookies] = useCookies(['auth0.nDd55EBq1Fvd5d1yQEhaLoD5rTV36fuc.is.authenticated'])
    return (
        cookies
    )
}

export default useCookieStorage;