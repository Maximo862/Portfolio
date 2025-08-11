export function Skillscard({ title, icons }) {
  return (
    <div className="col skills-box">
      <h3 className="skills-box-tittle">{title}</h3>
      <div className="d-flex flex-wrap gap-4">
        {icons.map((icon) => (
          <div className="text-center skills-icon">
            {icon.icon}
            <p className="skills-icon-tittle">{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
