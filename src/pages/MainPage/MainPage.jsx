import { useEffect } from "react";
import "./MainPage.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopAnimeList } from "../../redux/reducers/anime.reducer";
import { Link } from "react-router-dom";

const MainPage = () => {
  const dispatch = useDispatch();

  const topAnimeList = useSelector((state) => state.rootReducer.anime.list);

  // console.log(topAnimeList);

  useEffect(() => {
    dispatch(fetchTopAnimeList());
  }, [dispatch]);

  return (
    <>
      <div className="list-container">
        {topAnimeList.length !== 0 &&
          topAnimeList.map((anime) => {
            return (
              <div key={anime.mal_id} className="anime-card">
                <Link to={`/product/${anime.mal_id}`} className="nav-link">
                  <div className="poster">
                    <img src={anime.images.jpg.image_url} />
                  </div>
                  <p className="name">{anime.title_english}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MainPage;
