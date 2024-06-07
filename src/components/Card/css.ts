export let css = {
  box: {
    width: "100%",
    flexGrow: 1,
    typography: "body1",
    // borderBottom: "4px solid #000",
    paddingBottom: "1rem",
    boxShadow:
      "0 -2px 15px rgba(0, 0, 0, 0.25), 10px 6px 166px rgba(0, 0, 0, 0.22)",
    transition: "box-shadow 0.3s ease-in-out",
    borderRadius: "10px",
    mt: 2,
  },
  img: {
    marginLeft: "0.6rem",
    borderRadius: "5px 5px",
    height: "110px",
    width: "150px",
  },
  typoPrice: {
    m: "0 0 32px 4px",
    color: "#fff",
    fontSize: "1.5rem",
  },
  button: {
    width: 130,
    p: 1,
    background: "#fa942e",
    color: "#fff",
    borderRadius: "30px",
    boxShadow: "0 0 3px #fff, 0 0px 6px #fff",
    transition: "box-shadow 0.3s ease-in-out",
    // border: "1.5px solid #fff",
    mt: 1.5,
    "&:focus": {
      backgroundColor: "#fa942e",
    },
  },
};
