import { useEffect } from "react";
import "./DetailPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchDetailAnime } from "../../redux/reducers/anime.reducer";

const DetailPage = () => {
  const params = useParams();
  const mal_id = params.id;

  const dispatch = useDispatch();

  const detailAnimeData = useSelector(
    (state) => state.rootReducer.anime.detailAnime
  );

  const isLoadingDetailAnime = useSelector(
    (state) => state.rootReducer.anime.isLoading
  );

  console.log(isLoadingDetailAnime);

  if (Object.keys(detailAnimeData).length !== 0) {
    console.log(detailAnimeData);
  }

  useEffect(() => {
    dispatch(fetchDetailAnime(mal_id));
  }, [dispatch, mal_id]);

  return (
    <div className="detail-container">
      {isLoadingDetailAnime ? (
        <p className="detail-loading">Loading...</p>
      ) : (
        <>
          {Object.keys(detailAnimeData).length !== 0 && (
            <>
              <div className="detail-poster">
                <img
                  src={detailAnimeData.images.jpg.image_url}
                  alt={detailAnimeData.mal_id}
                />
              </div>
              <div className="detail-content">
                <p className="detail-title">{detailAnimeData.title_english}</p>
                <p className="detail-score">Score: {detailAnimeData.score}</p>
                <p className="detail-synopsis">
                  Synopsis: {detailAnimeData.synopsis}
                </p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DetailPage;
