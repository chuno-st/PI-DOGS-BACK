import { CLEAR_PAGE, CREATE_BREED, DEL_FAV, FILTER_BY_TEMPERAMENT, GET_BREEDS, GET_BREED_DETAIL, GET_TEMPERAMENT, SEARCH_BREED, SET_FAV } from "../actions/actionsTypes";


const initialState = {
    breeds: [],
    allBreeds: [],
    temperaments: [],
    favBreeds: [],
    searchBreed: [],
    breedDetail: {},
    createBreed: {},
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_BREEDS:
            return {
                ...state,
                breeds: payload,
                allBreeds: payload
            }
        case GET_BREED_DETAIL:
            return {
                ...state,
                breedDetail: payload
            }
        case CLEAR_PAGE:
            return {
                ...state,
                breedDetail: {}
            }
        case SET_FAV:
            return {
                ...state,
                favBreeds: state.favBreeds.find((e) => e.ID === payload.ID) ? [...state.favBreeds] : [...state.favBreeds, payload]
            }
        case DEL_FAV:
            return {
                ...state,
                favBreeds: state.favBreeds.filter((e) => e.ID !== payload.ID)
            }
        case SEARCH_BREED:
            return {
                ...state,
                searchBreed: payload
            }
        case CREATE_BREED:
            return {
                ...state,
                creteBreed: payload
            }
        case GET_TEMPERAMENT:
            return {
                ...state,
                temperaments: payload
            }
        case FILTER_BY_TEMPERAMENT:
            const allBreeds = state.allBreeds
            const tempreamentFiltered = payload === '' ? allBreeds : allBreeds.filter((e) => e.Temperamento.toLowerCase().includes(payload.toLowerCase()))
            return {
                ...state,
                breeds: tempreamentFiltered
            }


        default: return state
    }
};

export default reducer;