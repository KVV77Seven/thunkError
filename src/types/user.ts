export interface UserState {
    users: any[],
    loading: boolean,
    error: string | null
}
export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}
export interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}
export interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}
export interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS,
}
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction