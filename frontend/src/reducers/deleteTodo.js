import _ from 'lodash';
import * as types from '../types/deleteTodo';

export default (state = {}, action) => {
    switch (action.type) {
        case types.DELETE_TODO:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};