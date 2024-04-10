import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addVideoTrailer } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const useTrailerDemo = (id) => {
  const dispatch = useDispatch();

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addVideoTrailer(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useTrailerDemo;
