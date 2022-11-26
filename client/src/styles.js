import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  containerWidth: {
    maxWidth: "1920px",
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    padding: "15px 30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    color: "#3f51b5",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
