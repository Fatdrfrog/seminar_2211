import hero from "../images/illustration-hero.svg";
import ContentActions from "./ContentActions";
import ContentInfo from "./ContentInfo";

export default function ContentCard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        flexDirection: "column",
        borderRadius: "20px",
      }}
    >
      <img
        src={hero}
        alt="there is a hero"
        style={{
          borderRadius: "20px 20px 0px 0px",
        }}
      />

      <ContentInfo />
      <ContentActions />
    </div>
  );
}
