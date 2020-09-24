import { FETCH_DATA, UPDATE_TRUCKS, ADD_TRUCK, SET_ERROR, DELETE_TRUCK } from "../actions";

export const initialState = {
    trucks: [{
      id: 0,
      truckName:"",
      imageOfTruck: "",
      foodType: "",
      location: "",
      departureTime: "",
      dinerRatings: [],
      dinerRatingAvg: 0,
      menu: {
          itemName: "",
          itemDescription: "",
          itemPhotos: [],
          itemPrice: 0,
          dinerRatings: [],
          dinerRatingAvg: 0
      }
    }],
    error: ""
  }

  export const trucksReducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_DATA: 
          return {
            ...state,
            trucks: []
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