import React, { useState, useEffect } from "react";
import JWT from 'jwt-decode';
import axios from "axios";
import cookie from 'react-cookies';
import base64 from 'base-64';


const api = " http://localhost:3010"
//creating the context autherization api
export const AuthContext = React.createContext();
export default function Auth(props) {

    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [status, setStatus] = useState(0)

    const signUp = async (username, password, email, mobileNumber) => {
        axios.post(`${api}/signup/users`, {
            username: username,
            password: password,
            email: email,
            mobileNumber: mobileNumber,
        }).then(res => {
            console.log(res.data);
        })
    }

    const signIn = async (username, password) => {
        axios.post(`${api}/signin/users`, {
            username: username,
            password: password
        }, { headers: { 'Authorization': `Basic ${base64.encode(`${username}:${password}`)}` } }).then(res => {
            tokenChecker(res.data)
            setStatus(res.status)
        });
    }
    const signOut = () => {
        setIsLoggedIn(false)
        setUser({})
        cookie.remove('userId')
        cookie.remove('token')

    };


    const tokenChecker = (user) => {
        if (user) {
            const validUser = JWT(user.token)
            if (validUser) {
                setUser(user)
                setIsLoggedIn(true)
                cookie.save('userId', user.id)
                cookie.save('token', user.token)
            } else {
                setIsLoggedIn(false)
                setUser({})
            }

        } else {
            setIsLoggedIn(false)
            setUser({})
        }
    }
    const state = {
        signUp,
        signIn,
        signOut,
        setIsLoggedIn,
        setUser,
        user,
        isLoggedIn,
        status,


    }

    useEffect(() => {
        const data = cookie.load('token');
        if (data) {
            setIsLoggedIn(true);

        }
    }, [])

    return (
        //giving the autherization context the value of the state for the children(other components will use it)
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}