import axios from 'axios'

// 11- Handling Unexpected Errors Globally (coding with Mosh vido)
// When ever there will be an error in response, axios interceptor
// will be called first THEN the control will pass to the catch block
// (if the catch block exists)
axios.interceptors.response.use(null, (error) => {
	const unexpectedError = error.response && error.response.status >= 400 && error.response.status < 500;
	if (!unexpectedError) {
		console.log('Error log', error);
		
	}

	return Promise.reject(error);
});

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete
};
