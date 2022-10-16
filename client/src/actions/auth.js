import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        console.log("Inside try");
        const { data } = await api.signUp(authData)
        console.log("After getting data");
        dispatch({ type: 'AUTH', data})
        console.log("Afteer disp[atching data");
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        console.log("After parsing");
        navigate('/')
        console.log("navigating");
    } catch (error) {
        console.log(error.response)
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
