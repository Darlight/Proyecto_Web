import _ from 'lodash';
import * as types from '../types/editTodo';

export default (state = {}, action) => {
    switch (action.type) {
        case types.EDIT_TODO:
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        default:
            return state;
    }
};