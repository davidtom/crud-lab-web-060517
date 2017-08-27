
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch (action.type){
    case "ADD_RESTAURANT":
      let id = cuidFn()
      return {restaurants: state.restaurants.concat({text: action.restaurant.text, id: id})}
    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants}
    default:
      return state;
  }
}
