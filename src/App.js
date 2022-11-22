import backgroundSVG from "./images/pattern-background-desktop.svg";
import ContentCard from "./components/ContentCard";

function App() {
  return (
    <div
      style={{
        background: `url(${backgroundSVG})`,
        height: "100vh",
        backgroundSize: "100vh 100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ContentCard />
    </div>
  );
}

export default App;
