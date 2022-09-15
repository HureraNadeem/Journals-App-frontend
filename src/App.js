import { Box } from '@mui/material';
import makeStyles from "@material-ui/core/styles/makeStyles";

// import DataContextProvider from "./context/data.context";
import SideBar from "./components/side-bar/side-bar";
import AllJournals from "./components/all-journals/all-journals";

const useStyles = makeStyles(theme => ({
  AppWrapper: {
    display: 'flex',

  },
}));


function App() {
  const classes = useStyles();

  return (
    <>
      {/* <DataContextProvider> */}
        <Box className={classes.AppWrapper}>

          <SideBar />
          <AllJournals />

        </Box>
      {/* </DataContextProvider> */}
    </>

  );
}

export default App;
