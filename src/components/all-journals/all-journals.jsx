import { Box, InputBase } from '@mui/material';
import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from "@material-ui/core";
import { Button } from '@mui/material';




const useStyles = makeStyles(theme => ({
    OuterContainer: {
        padding: '55px 60px',
        width: '341px',
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        background: '#FFF2EE',

    },
    inputField: {
        width: '336px',
        height: '60px',
        border: '3px solid #E29578',
        borderRadius: '20px',
        backgroundColor: "#FFF2EE",
        paddingLeft: '20px'


    },
    outerhehe: {
        marginTop: '70px',
        alignSelf: 'normal'

    },
    hehe: {
        display: 'flex',
        justifyContent: 'space-between',
        "& h1": {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '29px',
            color: '#5B5B5B',

        },
        "& h3": {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#5B5B5B',


            textDecoration: 'underline',


        },
    },
    journalsBydate: {


    },
    journalDate: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '24px',
        lineHeight: '29px',
        color: '#5B5B5B',
    },
    journalDiv: {
        width: '283px',
        height: '173px',
        background: '#E29578',
        boxShadow: '0px 8px 16px rgba(227, 165, 142, 0.6)',
        borderRadius: '20px',
        padding: '27px',
        display: 'flex',
        alignItems: 'center',
        gap: '30px',

    },
    journalTime: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '29px',
        color: '#EDF6F9',
    },
    journalData: {
        borderLeft: '1px solid #EDF6F9',
        paddingLeft: '20px',
        '& h6': {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '22px',
            color: '#EDF6F9',
            margin: '0px',
            padding: '0px',
            marginBottom: '12px',
        },
        '& p': {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '128%',
            color: '#EDF6F9',
            margin: '0px',
            padding: '0px',
        }



    },

    addButton: {
        position: 'absolute',

        right: '-80%',
        width: '66px',
        height: '60px',
        background: '#006D77 !important',
        borderRadius: '20px !important',


        fontSize: '55px !important',
    }




}));


function AllJournals() {

    const classes = useStyles();

    return (
        <>
            <Box className={classes.OuterContainer}>
                <Box className={classes.searchBox}>
                    <InputBase id="outlined-basic" placeholder="search" variant="outlined" className={classes.inputField}
                    // InputProps={{
                    //     startAdornment: (
                    //         <InputAdornment position="start">
                    //             <SearchIcon />
                    //         </InputAdornment>
                    //     ),
                    // }}
                    />



                </Box>
                <Box className={classes.outerhehe}>
                    <Box className={classes.hehe}>
                        <h1>All Journals</h1>
                        <h3>see all</h3>

                    </Box>
                    <Box className={classes.journalsBydate}>
                        <h1 className={classes.journalDate}>23 january, 2022</h1>
                        <Box className={classes.journalDiv}>
                            <h4 className={classes.journalTime}>10:00PM</h4>
                            <Box className={classes.journalData}>
                                <h6>Today's dream</h6>
                                <p>I was running away from a group of people ...</p>
                            </Box>

                        </Box>

                    </Box>
                    <Box className={classes.journalsBydate}>
                        <h1 className={classes.journalDate}>23 january, 2022</h1>
                        <Box className={classes.journalDiv}>
                            <h4 className={classes.journalTime}>10:00PM</h4>
                            <Box className={classes.journalData}>
                                <h6>Today's dream</h6>
                                <p>I was running away from a group of people ...</p>
                            </Box>

                        </Box>

                    </Box>
                    <Box className={classes.journalsBydate}>
                        <h1 className={classes.journalDate}>23 january, 2022</h1>
                        <Box className={classes.journalDiv}>
                            <h4 className={classes.journalTime}>10:00PM</h4>
                            <Box className={classes.journalData}>
                                <h6>Today's dream</h6>
                                <p>I was running away from a group of people ...</p>
                            </Box>

                        </Box>

                    </Box>
                </Box>

                <Button className={classes.addButton} variant="contained">+</Button>



            </Box>

        </>
    )
}

export default AllJournals