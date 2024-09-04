const globalSettings = {
  apiUrl: 'https://localhost:5010/api/';

  getData(path){
   
   fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parsing the response body to JSON
  })
  }
}

export default api;