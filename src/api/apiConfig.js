const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "fb8fa35068ee496e67516017311d1aea",
    originalImg: (imagePath) => `https://image.tmdb.org/t/p/original/${imagePath}`,
    w500Img: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
};
export default apiConfig;