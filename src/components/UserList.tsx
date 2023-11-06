import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";
import {useAppDispatch} from "../hooks/useAppDispatch";

const UserList = () => {
    const { users, error, loading } = useTypedSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>

        </div>
    );
};

export default UserList;
