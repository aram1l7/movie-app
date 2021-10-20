const api = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '298c6ddb19cf6d108216d72293526fb5',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default api;