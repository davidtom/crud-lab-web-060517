import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const restaurantReviews = this.props.store.getState().reviews.filter(review =>
    review.restaurantId === this.props.restaurantId)

    const reviews = restaurantReviews.map((review, index) => <Review review={review} store={this.props.store} key={index}/>)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;
