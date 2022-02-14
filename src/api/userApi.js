import axiosClientLg from "./axiosClientLg";

const userApi = {
    register(data) {
        const url = '/auth/local/register';
        return axiosClientLg.post(url , data)
    }
}
export default userApi