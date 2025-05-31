export default function ProjComp({ projList }) {
  console.log(projList);
  if (!projList || !Array.isArray(projList)) {
    return <div>No projects available</div>;
  }
  return (
    <div className="innProj">
      {projList.map((item) => (
        <div key={item.key} className="prodStlye">
          <img src={item.url} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.para}</p>
          <button onClick={() => window.open(item.url, "_blank")} type="button">
            View Project
          </button>
        </div>
      ))}
    </div>
  );
}
