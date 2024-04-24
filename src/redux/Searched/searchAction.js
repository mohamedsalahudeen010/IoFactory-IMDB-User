export const fetchMoviesSearchRequest = () => {
  return {
    type: "FETCH_MOVIES_REQUEST_SEARCH",
  };
};

export const fetchMoviesSearchSuccess = (data) => {
  return {
    type: "FETCH_MOVIES_SUCCESS_SEARCH",
    payload: data,
  };
};

export const fetchMoviesSearchFailure = (error) => {
  return {
    type: "FETCH_MOVIES_FAILURE_SEARCH",
    payload: error,
  };
};



  
  

export const fetchMoviesWithSearch = (query) => {
  console.log(query);
  return async (dispatch) => {
    dispatch(fetchMoviesSearchRequest());
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8b42184434msh71f1f83f04cdf81p17b83ejsnab3ce3b304b3',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  dispatch(fetchMoviesSearchSuccess(result));
} catch (error) {
	console.error(error);
  dispatch(fetchMoviesSearchFailure(error));
    }
}
};
