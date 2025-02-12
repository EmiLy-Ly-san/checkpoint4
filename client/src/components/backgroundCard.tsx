import type { BackgroundCardProps } from "../types/BackgroundCardProps";
import "./../style/BackgroundCard.css";

function BackgroundCard({ title, thumbnailUrl, id }: BackgroundCardProps) {
  return (
    <>
      <article className="background-card">
        <section className="card-content">
          <div className="background-item">
            <img src={thumbnailUrl} alt={title} className="background-image" />
          </div>
        </section>
        <section className="card-footer">
          <p className="background-title">{title}</p>
          <img
            className="heart-icon"
            src="heart-purple.png"
            alt="heart icon"
            data-id={id}
          />
        </section>
      </article>
    </>
  );
}
export default BackgroundCard;
