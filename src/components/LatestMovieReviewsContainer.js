import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'MI4JTwR02blSHLeoVTfM9A2DtNNanql2';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
          reviews: [],
        };
      }
    
      componentDidMount(){
          fetch(URL)
          .then((resp) => resp.json())
          .then((data) => this.setState({reviews: data.results}))
        //   .then((data) => console.log(data))
      }

    render(){
        return (
            <div className="latest-movie-reviews"> <MovieReviews reviews={this.state.reviews}/></div>
        )
    }
}