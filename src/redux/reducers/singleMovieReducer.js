export default function bucketlistReducer(state = {}, action){
    switch(action.type){
      case 'FETCH_SINGLE_MOVIE_SUCCESS':
        return action.movie;
      default:
        return state;
    }
  }