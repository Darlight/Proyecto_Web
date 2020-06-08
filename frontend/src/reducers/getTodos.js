import _ from 'lodash';
import * as types from '../types/getTodos';

export default (state = {}, action) => {
    switch (action.type) {
        case types.GET_TODOS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id')
            }
        case types.GET_TODO:
        default:
            return state;
    }
};