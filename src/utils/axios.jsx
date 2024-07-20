import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDMyMThjODQ0NDI0OGI4ZmU4YzllOWEwNzkzNDYzNiIsIm5iZiI6MTcyMTQ3MDc3My40NzMxMTcsInN1YiI6IjY2OWI4ZDAzOGZiMzk2NWU5ZGRlOTU0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KtDujh1iNs7XbORLkVNRQjoEmNr1GCCsVTbHTHvcquM",
  },
});
export default instance;
