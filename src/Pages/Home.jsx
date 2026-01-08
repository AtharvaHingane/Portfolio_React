import BlurText from "../components/BlurText";

const Home = () => {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <BlurText
        text="Creative Developer & Designer"
        className="text-3xl"
        delay={120}
      />
    </div>
  );
};

export default Home;