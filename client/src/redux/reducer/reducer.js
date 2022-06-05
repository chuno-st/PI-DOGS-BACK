import { CLEAR_PAGE, DEL_FAV, GET_BREEDS, GET_BREED_DETAIL, SET_FAV } from "../actions/actionsTypes";


const initialState = {
    breeds: [],
    temperaments: [],
    favBreed: [],
    breedDetail: {},
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_BREEDS:
            return {
                ...state,
                breeds: payload
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
                favBreed: state.favBreed.find((e) => e.ID === payload.ID) ? [...state.favBreed] : [...state.favBreed, payload]
            }
        case DEL_FAV:
            return {
                ...state,
                favBreed: state.favBreed.filter((e) => e.ID !== payload.ID)
            }

        default: return state
    }
};

export default reducer;