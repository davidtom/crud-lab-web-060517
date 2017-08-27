
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews:[]}, action) {
  switch (action.type){
    case "ADD_RESTAURANT":
      let id = cuidFn()
      return Object.assign({}, state, {restaurants: state.restaurants.concat({text: action.restaurant.text, id: id})})
    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return Object.assign({}, state, {restaurants})
    case "ADD_REVIEW":
      let revId = cuidFn()
      return Object.assign({}, state, {reviews: state.reviews.concat({text: action.review.text, restaurantId: action.review.restaurantId, id: revId})})
    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, {reviews})
    default:
      return state;
  }
}
