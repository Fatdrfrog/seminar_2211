export default function ContentActions() {
  return (
    <div
      style={{
        width: "50%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          marginTop: "1rem",
          padding: ".5rem 3rem .5rem 3rem",
        }}
      >
        Proceed to Payment
      </button>
      <button
        disabled
        style={{
          color: "grey",
          backgroundColor: "white",
          border: "none",
          marginTop: "1rem",
          marginBottom: "1rem",
          padding: ".5rem 3rem .5rem 3rem",
        }}
      >
        Cancel Order
      </button>
    </div>
  );
}
