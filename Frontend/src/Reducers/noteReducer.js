import {
  NOTES_CREATE_FAIL,
  NOTES_CREATE_REQUEST,
  NOTES_CREATE_SUCCESS,
  NOTES_DELETE_FAIL,
  NOTES_DELETE_REQUEST,
  NOTES_DELETE_SUCCESS,
  NOTES_REGISTER_FAIL,
  NOTES_REGISTER_REQUEST,
  NOTES_REGISTER_SUCCESS,
  NOTES_UPDATE_FAIL,
  NOTES_UPDATE_REQUEST,
  NOTES_UPDATE_SUCCESS,
} from "../Constants/noteConstants";

export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTES_REGISTER_REQUEST:
      return {};
    case NOTES_REGISTER_SUCCESS:
      return { notes: action.payload };
    case NOTES_REGISTER_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const noteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_CREATE_REQUEST:
      return {};
    case NOTES_CREATE_SUCCESS:
      return { success: true };
    case NOTES_CREATE_FAIL:
      return { error: action.payload, success: false };
    default:
      return state;
  }
};

export const noteUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_UPDATE_REQUEST:
      return {};
    case NOTES_UPDATE_SUCCESS:
      return { success: true };
    case NOTES_UPDATE_FAIL:
      return { error: action.payload, success: false };
    default:
      return state;
  }
};

export const noteDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_DELETE_REQUEST:
      return {};
    case NOTES_DELETE_SUCCESS:
      return { success: true };
    case NOTES_DELETE_FAIL:
      return { error: action.payload, success: false };
    default:
      return state;
  }
};
