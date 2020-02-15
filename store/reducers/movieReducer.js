let initialState = {
  popularMovies: [],
  isLoading: false,
  error: null
}

export default movieReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOAD_MOVIE_START':
          return Object.assign({}, state, { isLoading: true })
      case 'LOAD_MOVIE_SUCCESS':
        return Object.assign({}, state, { popularMovies: action.payload, isLoading: false })
          // return Object.assign({}, state, { popularMovies: [...state.popularMovies,...action.payload], isLoading: false })
      case 'LOAD_MOVIE_FAILURE':
          return Object.assign({}, state, { error: action.payload, isLoading: false })
      default:
          return state
  }
}
