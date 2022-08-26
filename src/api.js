import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "df4f8713-647e-4523-a9f9-fef471720cb2",
    },
})
export const usersApi = {
    getUsers(countOnPage, numberPage = 1) {
        return instance.get(`users?count=${countOnPage}&page=${numberPage}`, {withCredentials: true})
            .then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`, {},)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },
}
export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status`, {status,})
    }
}
export const headerApi = {
    isAuth() {
        console.warn('Update API, usage new authApi')
        return authApi.isAuth();
    },
    setAuthProfile(id) {
        console.warn('Update API, usage new authApi')
        return authApi.setAuthProfile(id);
    }
}
export const authApi = {
    loginUser(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logoutUser(email, password, rememberMe = false) {
        return instance.delete('auth/login', {email, password, rememberMe})
    },
    isAuth() {
        return instance.get(`auth/me`)
    },
    setAuthProfile(id) {
        return instance.get(`profile/${id}`)
    }
}


































