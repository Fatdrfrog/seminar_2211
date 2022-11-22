import { ReactComponent as MusicSVG } from "../images/icon-music.svg";

export default function ContentInfo() {
  return (
    <>
      <h1 style={{ alignSelf: "center" }}>Order Summary</h1>
      <p style={{ alignSelf: "center" }}>
        You can now listen to million You can now listen to million You can now
        listen to million!
      </p>

      <div
        style={{
          display: "flex",
          alignSelf: "center",
          width: "50%",
          background: "lightgrey",
          opacity: "70%",
          alignItems: "center",
          justifyContent: "space-around",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "1rem",
            justifyContent: "space-between",
          }}
        >
          <MusicSVG />
          <div>
            <b>Annual Plan</b>
            <p style={{ opacity: "70%" }}>$59.99/year</p>
          </div>
        </div>
        <a href="#">Change</a>
      </div>
    </>
  );
}
