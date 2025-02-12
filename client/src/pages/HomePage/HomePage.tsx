import { useEffect, useState } from "react";
import type { Background } from "../../types/Background";
import useToast from "../../utils/useToastify";
import "../../style/HomePage.css";
import { Link } from "react-router-dom";
import BackgroundCard from "../../components/BackgroundCard";

export default function HomePage() {
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
    <>
      <section>
        <button
          data-id="1"
          type="button"
          onClick={(event) => {
            handleSeasonClick(event);
          }}
        >
          Winter backgrounds
        </button>
        <button
          data-id="2"
          type="button"
          onClick={(event) => {
            handleSeasonClick(event);
          }}
        >
          Spring backgrounds
        </button>
        <button
          data-id="3"
          type="button"
          onClick={(event) => {
            handleSeasonClick(event);
          }}
        >
          Summer backgrounds
        </button>
        <button
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
            to={`/background/${background.id}`}
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
    </>
  );
}
