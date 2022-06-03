import axios from "axios";
import { CLEAR_PAGE, GET_BREEDS, GET_BREED_DETAIL } from "./actionsTypes";


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
}
