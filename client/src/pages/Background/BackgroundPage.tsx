import { useLoaderData } from "react-router-dom";
import type { Background } from "../../types/Background";
import "../../style/Background.css";

export default function BackgroundPage() {
  const { id, name, file } = useLoaderData() as Partial<Background> & {
    error?: number;
  };
  return (
    <div className="background-page">
      <h2>" {name} "</h2>
      <div>
        <img src={`${import.meta.env.VITE_API_URL}${file}`} alt="" />
      </div>
      <button
        type="button"
        data-id={id}
        className="little-cta"
        style={{ width: "160px" }}
      >
        Add in my favorites
      </button>
    </div>
  );
}
