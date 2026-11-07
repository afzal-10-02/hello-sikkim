export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} mb-9 max-w-3xl`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </div>
  );
}