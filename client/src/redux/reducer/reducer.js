import { CLEAR_PAGE, GET_BREEDS, GET_BREED_DETAIL } from "../actions/actionsTypes";


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

        default: return state
    }
};

export default reducer;