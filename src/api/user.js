import request from "../utils/request";

export function getUsers(params= {}) {
    return request({
        method:'GET',
        url:'/users',
        params,
    })
}

export function updateUser(id,data) {
    return request ({
        method:'PUT',
        url:`/users/${id}`,
        data,
    })
}