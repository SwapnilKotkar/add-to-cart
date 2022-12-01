import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerWidth: {
    maxWidth: "1920px",
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    padding: "15px 30px",
  },
  box: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  heading: {
    color: "#3f51b5",
  },
  "@media (max-width: 600px)": {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
