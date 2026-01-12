
import { useContext } from "react";
import BlurText from "../component/BlurText";
import "../Style/Aboutme.css";
import { DataContext } from "../context/DataContext";

function Aboutme() {
  const { data, loading } = useContext(DataContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="aboutme-container">
      <h1 className="name" id="name">{data?.about?.name}</h1>
      <BlurText
        text={data?.about?.text}

        className="about-text"
        delay={10}
        animateBy="words"
      />
    </div>
  );
}

export default Aboutme;
