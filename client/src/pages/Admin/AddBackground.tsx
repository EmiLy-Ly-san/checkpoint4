import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import type { Season } from "../../types/Season";
import useToast from "../../utils/useToastify";
import "../../style/AddBackground.css";

export default function AddBackground() {
  const { notifyError, notifySuccess } = useToast();
  const [seasons, setSeasons] = useState<Season[]>([]);

  useEffect(() => {
    const urlForSeasons = `${import.meta.env.VITE_API_URL}/api/seasons`;
    recoverCategories(urlForSeasons);
  }, []);

  async function recoverCategories(url: string) {
    try {
      const request = await fetch(url);
      const datas = await request.json();
      setSeasons(datas);
    } catch (err) {
      notifyError("You are log out !");
    }
  }

  const handleCreateBackground = async (
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
        `${import.meta.env.VITE_API_URL}/api/background`,
        {
          method: "POST",
          body: formData,
        },
      );
      if (!response.ok) {
        throw new Error("An unknown error occurred.");
      }
      notifySuccess(`The background ${data.name} has been created.`);
    } catch (err) {
      notifyError((err as Error).message);
    }
  };

  return (
    <div className="add-page">
      <form onSubmit={handleCreateBackground} className="add-Background-form">
        <fieldset className="main-info-background-wrapper">
          {/* <label htmlFor="name">Name</label> */}
          <h2>Add a background</h2>
          <input
            type="text"
            id="name"
            name="name"
            place-holder="Give it a name "
            required
          />

          {/* <label id="season-title" htmlFor="season_id">
          Title of the season
        </label> */}
          {/* <label htmlFor="season_id" className="label-season">
          Choose a season
        </label> */}
          <select name="season_id" id="season_id">
            <option value="">--Please choose a season--</option>
            {seasons.map((season) => {
              return (
                <option key={season.id} value={season.id}>
                  {season.name}
                </option>
              );
            })}
          </select>
          <section className="preview-image-choice">
            <label htmlFor="file">Choose an image</label>
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
            Add
          </button>
          <NavLink to="/admin" className="standard-button ">
            Return
          </NavLink>
        </section>
      </form>
    </div>
  );
}
