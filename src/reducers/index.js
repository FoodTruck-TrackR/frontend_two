import { FETCH_DATA, UPDATE_TRUCKS, ADD_TRUCK, SET_ERROR, DELETE_TRUCK } from "../actions";

export const initialState = {
    trucks: [{
      id: 1,
      name:"Bobs Burgers",
      location: "Orlando",
      vendor_id: "1"
    },
    {
      id: 2,
      name:"Taco King",
      location: "Las Vegas",
      vendor_id: "2"
    }
  ],
    error: ""
  }

  export const trucksReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_DATA: 
          return {
            ...state,
            trucks: [...state.trucks]
          }
        case UPDATE_TRUCKS:
          return {
            ...state,
            trucks: action.payload,
          } 
        case ADD_TRUCK:
          return {
            ...state,
            trucks: [...state.trucks, action.payload]
          }
        case DELETE_TRUCK:
          return {
            ...state,
            trucks: state.trucks.filter((truck) => truck.id === action.payload)
          }
        case SET_ERROR:
          return {
            ...state,
            error: action.payload
          }
  
      default: 
        return state
    }
  }