import ProjComp from "./ProjComp";
import projList from "./ProjList";
export default function Project() {
  return (
    <div id="Projects">
      <h2>Projects</h2>
      <div className="insideProj">
        <ProjComp projList={projList} />
      </div>
    </div>
  );
}
