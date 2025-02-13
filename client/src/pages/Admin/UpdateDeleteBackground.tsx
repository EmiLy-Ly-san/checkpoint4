import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import type { Background } from "../../types/Background";
import type { Season } from "../../types/Season";
import useToast from "../../utils/useToastify";
import "../../style/AddBackground.css";
import "../../style/UpdateDeleteBackground.css";

export default function UpdateDeleteBackground() {
  const { notifyError, notifySuccess } = useToast();
  const [seasons, setSeasons] = useState<Season[]>([]);
  const { id: backgroundId } = useParams();
  const [background, setBackground] = useState<Background | null>(null);

  useEffect(() => {
    const urlForSeasons = `${import.meta.env.VITE_API_URL}/api/seasons`;
    recoverCategories(urlForSeasons);
  }, []);

  useEffect(() => {
    if (backgroundId) {
      try {
        fetch(`${import.meta.env.VITE_API_URL}/api/background/${backgroundId}`)
          .then((response) => response.json())
          .then((bg) => {
            setBackground(bg);
          });
      } catch (error) {
        notifyError("There was a problem");
      }
    }
  }, [backgroundId, notifyError]);

  async function recoverCategories(url: string) {
    try {
      const request = await fetch(url);
      const datas = await request.json();
      setSeasons(datas);
    } catch (err) {
      notifyError("There was a problem");
    }
  }

  const handleUpdateBackground = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    // console.log({ data });

    let previewImageToUpload: File | string = "";

    // Nouvelle image sélectionnée
    previewImageToUpload = data.file;

    // On utilise formData.set pour remplacer la valeur
    formData.set("file", previewImageToUpload);
    // console.log({ formData });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/background/${backgroundId}`,
        {
          method: "PUT",
          body: formData,
        },
      );
      if (!response.ok) {
        throw new Error("An unknown error occurred.");
      }
      notifySuccess(`The background ${data.name} has been updated.`);
    } catch (err) {
      notifyError((err as Error).message);
    }
  };

  const handleDeleteVideo = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/background/${backgroundId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        throw new Error("An unknown error occurred.");
      }

      notifySuccess(`The video ${background?.name} has been removed.`);
    } catch (err) {
      notifyError((err as Error).message);
    }
  };

  return background ? (
    <form onSubmit={handleUpdateBackground} className="add-page">
      <fieldset className="main-info-background-wrapper">
        <legend>Current informations of the Background</legend>
        <p>Change the information if you want to update it</p>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={background.name}
          style={{ color: "var(--textColor)" }}
        />
        <select
          name="season_id"
          id="season_id"
          defaultValue={background.season_id}
        >
          <option value="">--Please choose a season--</option>
          {seasons.map((season) => {
            return (
              <option
                key={season.id}
                value={season.id}
                defaultChecked={season.id === background.season_id}
              >
                {season.name}
              </option>
            );
          })}
        </select>
        <section className="current-file-preview">
          <img
            className="current-file"
            src={`${import.meta.env.VITE_API_URL}${background?.file}`}
            alt="The current background."
          />
        </section>
        <section className="preview-image-choice">
          <label htmlFor="file">Choose an other image</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/png, image/jpeg"
          />
        </section>
      </fieldset>

      <section className="form-buttons-wrapper">
        <button type="submit" className="little-cta">
          Update
        </button>
        <button
          type="button"
          onClick={handleDeleteVideo}
          className="little-cta"
        >
          Delete
        </button>
        <NavLink to="/admin" className="standard-button return-button">
          Return
        </NavLink>
      </section>
    </form>
  ) : (
    <p>Loading ...</p>
  );
}
