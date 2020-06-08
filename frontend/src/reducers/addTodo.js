import _ from 'lodash';
import * as types from '../types/addTodo';

export default (state = {}, action) => {
    switch (action.type) {
        case types.ADD_TODO:
        default:
            return state;
    }
};