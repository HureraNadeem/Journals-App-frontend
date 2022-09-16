import { Box } from '@mui/material';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useState, createContext } from "react";
import data from './data/data-file.json'


// import DataContextProvider from "./context/data.context";
import SideBar from "./components/side-bar/side-bar";
import AllJournals from "./components/all-journals/all-journals";
import Editor from './components/editor/editor';

const useStyles = makeStyles(theme => ({
  AppWrapper: {
    display: 'flex',

  },
}));

export const DataContext = createContext({})

function App() {
  const [dataFromBackend, setDataFromBackend] = useState(data);
 
  const classes = useStyles();
  // console.log(data)

  return (
    <>
      {/* <DataContextProvider> */}
      <DataContext.Provider value={{ data: dataFromBackend, setData: setDataFromBackend }}>


        <Box className={classes.AppWrapper}>

          <SideBar />
          <AllJournals />
          <Editor />

        </Box>
      </DataContext.Provider>
      {/* </DataContextProvider> */}
    </>

  );
}

export default App;
