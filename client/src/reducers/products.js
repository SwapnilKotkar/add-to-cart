import { FETCH_ALL_PRODUCTS, FETCH_PRODUCTS_BY_SEARCH, CREATE_PRODUCT, DELETE_PRODUCT, START_LOADING, END_LOADING} from '../actions/actionTypes'

const initialState = { isLoading: true, products: [] }

export default (state = initialState, action) => {
    switch(action.type){
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        case FETCH_ALL_PRODUCTS:
            return { ...state, products: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages };
        case FETCH_PRODUCTS_BY_SEARCH:
            return { ...state, products: action.payload };
        case CREATE_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case DELETE_PRODUCT:
            return { ...state, products: state.products.filter((product) => product._id !== action.payload)}
        default:
            return state;
    }
}