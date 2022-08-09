import { CLEAR_PAGE, CREATE_BREED, DEL_FAV, FILTER_BY_CREATED, FILTER_BY_TEMPERAMENT, GET_BREEDS, GET_BREED_DETAIL, GET_TEMPERAMENT, ORDER_BY_NAME, ORDER_BY_WEIGHT, SEARCH_BREED, SET_FAV } from "../actions/actionsTypes";


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
            const tempreamentFiltered = payload === '' ? allBreeds : allBreeds.filter((e) => e.Temperamento && e.Temperamento.includes(payload))
            return {
                ...state,
                breeds: tempreamentFiltered
            }
        case FILTER_BY_CREATED:
            // const allBreed = state.allBreeds
            const createdfilter = payload === 'bd' ? state.allBreeds.filter(e => e.createdInDb) : state.allBreeds.filter(e => !e.createdInDb)
            return {
                ...state,
                breeds: payload === 'all' ? state.allBreeds : createdfilter
            }
        case ORDER_BY_NAME:
            let sortedBreeds = payload === 'asc' ? state.allBreeds.sort(function (a, b) {
                if (a.Nombre > b.Nombre) {
                    return 1;
                }
                if (a.Nombre < b.Nombre) {
                    return -1;
                }
                return 0
            }) : state.allBreeds.sort(function (a, b) {
                if (a.Nombre > b.Nombre) {
                    return -1;
                }
                if (a.Nombre < b.Nombre) {
                    return 1;
                }
                return 0
            })
            return {
                ...state,
                breeds: sortedBreeds
            }
        case ORDER_BY_WEIGHT:
            let sortedByWeight = payload === 'menor'
                ?
                state.allBreeds.sort((a, b) => (a.Peso && Math.max(...a.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...a.Peso.split(' - ').map(Number))) - (b.Peso && Math.max(...b.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...b.Peso.split(' - ').map(Number))))
                :
                state.allBreeds.sort((a, b) => (b.Peso && Math.max(...b.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...b.Peso.split(' - ').map(Number))) - (a.Peso && Math.max(...a.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...a.Peso.split(' - ').map(Number))))
            // let sortedByWeight = payload === 'mayor' ? state.allBreeds.sort(function (a, b) {
            //     if ((a.Peso && Math.max(...a.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...a.Peso.split(' - ').map(Number))) > (b.Peso && Math.max(...b.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...b.Peso.split(' - ').map(Number))) ) {
            //         return -1;
            //     }
            //     if ((a.Peso && Math.max(...a.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...a.Peso.split(' - ').map(Number))) < (b.Peso && Math.max(...b.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...b.Peso.split(' - ').map(Number))) )  {
            //         return 1;
            //     }
            //     return 0
            // }) : state.allBreeds.sort(function (a, b) {
            //     if ((a.Peso && Math.max(...a.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...a.Peso.split(' - ').map(Number))) > (b.Peso && Math.max(...b.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...b.Peso.split(' - ').map(Number))) ) {
            //         return 1;
            //     }
            //     if ((a.Peso && Math.max(...a.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...a.Peso.split(' - ').map(Number))) < (b.Peso && Math.max(...b.Peso.split(' - ').map(Number)) === isNaN ? 0 : Math.max(...b.Peso.split(' - ').map(Number))) )  {
            //         return -1;
            //     }
            //     return 0
            // })
            return {
                ...state,
                breeds: sortedByWeight
            }

        default: return state
    }
};

export default reducer;