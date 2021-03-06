import {
	UPDATE_WEIGHT,
	UPDATE_BODYFAT,
	UPDATE_TRAINING,
	UPDATE_ACTIVITY,
	UPDATE_GENDER
} from '../actions/actions';

const INITIAL_STATE = {
  weightLbs: 150,
  bodyfat: 23,
  gender: 'male'
};

export default function calculator(state = INITIAL_STATE, action= {}) {
	switch(action.type) {
		case UPDATE_WEIGHT:
			return { ...state, weightLbs: action.payload };
		case UPDATE_BODYFAT:
			return { ...state, bodyfat: action.payload };
		case UPDATE_TRAINING:
			return { ...state, training: action.payload };
		case UPDATE_ACTIVITY:
			return { ...state, activity: action.payload };
		case UPDATE_GENDER:
		return { ...state, gender: action.payload };
		default:
			return state;
	}
}
