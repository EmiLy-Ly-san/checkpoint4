import { useEffect, useState } from "react";
// import "../../style/HomePage.css";
import { Link } from "react-router-dom";
import BackgroundCard from "../components/backgroundCard";
import type { Background } from "../types/Background";
import useToast from "../utils/useToastify";
import "../style/HomePage.css";

export default function SearchBackground() {
  const [backgroundsSeason, setBackgroundsBySeason] = useState<Background[]>();
  const [idOfTheSeason, setIdOfTheSeason] = useState<number>();
  const { notifyError } = useToast();

  const handleSeasonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (event.currentTarget.dataset.id) {
      const idTofind = Number.parseInt(`${event.currentTarget.dataset.id}`);
      if (idTofind) {
        setIdOfTheSeason(idTofind);
      }
    }
  };

  useEffect(() => {
    if (idOfTheSeason) {
      const urlForSeason = `${import.meta.env.VITE_API_URL}/api/backgrounds-season/${idOfTheSeason}`;
      recoverInfoBackgrounds(urlForSeason);
    }
  }, [idOfTheSeason]);

  async function recoverInfoBackgrounds(url: string) {
    try {
      const request = await fetch(url);
      const datas = await request.json();

      setBackgroundsBySeason(datas);
    } catch (err) {
      notifyError("You are log out !");
    }
  }

  return (
    <div className="home-page">
      <h2>Update or delete a background</h2>
      <p>Choose a season to find a background</p>
      <section className="button-home-wrapper">
        <button
          className={`standard-button ${idOfTheSeason === 1 ? "active" : ""}`}
          data-id="1"
          type="button"
          onClick={(event) => {
            handleSeasonClick(event);
          }}
        >
          Winter backgrounds
        </button>
        <button
          className={`standard-button ${idOfTheSeason === 2 ? "active" : ""}`}
          data-id="2"
          type="button"
          onClick={(event) => {
            handleSeasonClick(event);
          }}
        >
          Spring backgrounds
        </button>
        <button
          className={`standard-button ${idOfTheSeason === 3 ? "active" : ""}`}
          data-id="3"
          type="button"
          onClick={(event) => {
            handleSeasonClick(event);
          }}
        >
          Summer backgrounds
        </button>
        <button
          className={`standard-button ${idOfTheSeason === 4 ? "active" : ""}`}
          data-id="4"
          type="button"
          onClick={(event) => {
            handleSeasonClick(event);
          }}
        >
          Autumn backgrounds
        </button>
      </section>
      <section className="background-list">
        {backgroundsSeason?.map((background) => (
          <Link
            to={`./${background.id}`}
            className="carousel-slide"
            key={background.id}
          >
            <BackgroundCard
              title={background.name}
              thumbnailUrl={`${import.meta.env.VITE_API_URL}${background.file}`}
              id={background.id}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
