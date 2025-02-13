import { useLoaderData } from "react-router-dom";
import type { Background } from "../../types/Background";

export default function BackgroundPage() {
  const { id, name, file, season_id } =
    useLoaderData() as Partial<Background> & {
      error?: number;
    };
  return (
    <div>
      <h2>
        {name}
        {id}
        {season_id}
      </h2>
      <img src={`${import.meta.env.VITE_API_URL}${file}`} alt="" />
      <button type="button">
        Add in my favorites
        <span>
          <img src="heart-purple.png" alt="" />
        </span>
      </button>
    </div>
  );
}
