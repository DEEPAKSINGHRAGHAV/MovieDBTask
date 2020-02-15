

export const loadMovies = (page) => {

    return (dispatch, getState) => {
        dispatch({ type: 'LOAD_MOVIE_START' })
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1bf8fa62ee3d8b2cb0cde3ffe2426dd5&language=en-US&page=${page}`).then(function (response) {
            dispatch({ type: 'LOAD_MOVIE_SUCCESS', payload: response.json().results })
        }).catch(function (error) {
            dispatch({ type: 'LOAD_MOVIE_FAILURE', payload: error })
        })
    }
}
