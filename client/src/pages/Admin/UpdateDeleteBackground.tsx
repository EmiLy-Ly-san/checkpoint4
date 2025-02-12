import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import type { Background } from "../../types/Background";
import type { Season } from "../../types/Season";
import useToast from "../../utils/useToastify";

export default function AddBackground() {
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

  return background ? (
    <form onSubmit={handleUpdateBackground} className="add-Background-form">
      <fieldset className="main-info-background-wrapper">
        <legend>Main information Background</legend>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={background.name}
        />

        <label id="season-title" htmlFor="season_id">
          Title of the season
        </label>
        <label htmlFor="season_id" className="label-season">
          Choose a season
        </label>
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
      </fieldset>
      <section className="preview-image-choice">
        <label htmlFor="file">Choose a preview image</label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/png, image/jpeg"
        />
      </section>
      <section className="form-buttons-wrapper">
        <button type="submit" className="standard-button">
          Add
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
