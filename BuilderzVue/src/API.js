const api = {
  apiUrl: 'https://localhost:5010/api/',

  async getData(path) {
    return fetch(this.apiUrl + path)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .catch((error) => {
        console.error('Fetch error:', error)
      })
  }
}

export default api
