export const css = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    minHeight: "100vh",
    overflow: "hidden",
    paddingBottom: "10rem",
  },
  appBar: {
    background: "linear-gradient(90deg, #220e03f8 8%, #4d1f04f8 95%)",
    borderTop: "1px solid gray",
    borderRadius: "25px 25px 0 0",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    zIndex: 1000,
  },
  contentContainer: {
    flex: 1,
    overflowY: "auto",
    background: "linear-gradient(90deg, #220e03f8 8%, #4d1f04f8 95%)",
    borderRadius: "0 0 25px 25px",
    paddingTop: "10px",
  },
};
