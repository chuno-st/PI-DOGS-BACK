import axios from "axios";
import { CLEAR_PAGE, DEL_FAV, GET_BREEDS, GET_BREED_DETAIL, SET_FAV } from "./actionsTypes";


export function getBreeds() {
    return (dispatch) => {
        return axios("http://localhost:3001/dogs/")
            .then(res => dispatch({ type: GET_BREEDS, payload: res.data }))
    }
};

export function getBreedDetail(id) {
    return (dispatch) => {
        return axios(`http://localhost:3001/dogs/${id}`)
            .then(res => dispatch({ type: GET_BREED_DETAIL, payload: res.data }))
    }
    // return (dispatch) => {
    //     return fetch(`http://localhost:3001/dogs/:${id}`)
    //     .then (res=> res.json)
    //     .then (json => dispatch({type: GET_BREED_DETAIL, payload:json}))
};

export function clearPage(){
    return {
        type: CLEAR_PAGE
    }
};

export function setFav(payload){
    return {
        type: SET_FAV,
        payload
    }
};

export function delFav(payload){
    return {
        type: DEL_FAV,
        payload
    }
};