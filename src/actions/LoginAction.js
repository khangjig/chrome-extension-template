import {LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAIL} from '../const/ActionTypes'
import axios from 'axios'

const jwtDecode = require('jwt-decode')

export function loginRequest(loginData, props) {
    return (dispatch) => {
        dispatch({
            type: LOGIN_REQUEST
        })
        return axios.request({
                url: `${process.env.REACT_APP_DOMAIN_API}/auth`,
                method: 'post',
                data: {
                    email: loginData.email,
                    password: loginData.password
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            },
        ).then(res => {
            console.log(res.data)
            const token = res.data.result.token
            const decodeAccessToken = jwtDecode(token)

            props.cookies.set("ACCESS_COOKIE_NAME", token, {
                path: '/',
                expires: new Date(decodeAccessToken.exp * 1000),
                domain: '',
                httpOnly: false
            })

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

            dispatch({
                type: LOGIN_REQUEST_SUCCESS,
                payload: "Log-in successfully"
            })

        }).catch(err => {
            // example: test cookie
            props.cookies.set("ACCESS_COOKIE_NAME", "token-example", {
                path: '/',
                expires: new Date(10000000000000 * 100000000000000),
                domain: '',
                httpOnly: false
            })

            console.log(err)
            dispatch({
                type: LOGIN_REQUEST_FAIL,
                payload: "The email or password is not correct"
            })
        })
    }
}