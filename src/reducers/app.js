import Immutable from 'immutable';
import * as ActionTypes from '../components/http/actionType';

const initState = Immutable.fromJS({
    user: {},
});

export default (state = initState, action) => {
    let newState = state;
    switch (action.type) {
        case ActionTypes.LOAD_USER:
            newState = newState.set('user', action.payload);
            return newState;
        default:
            return newState;
    }
};
