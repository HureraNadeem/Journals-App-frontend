import { Box } from '@mui/material';
import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Dummy from '../../Assets/dummy.png';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles(theme => ({
    OuterContainer: {
        padding: '55px 60px',
        width: '341px',
    },
    profileBox: {
        display: 'flex',
        justifyContent: 'center',

    },
    sideBaroptionsWrapper: {
        marginTop: '160px',

    },
    sideBarOptionBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: '40px',
        marginBottom: '64px',

        "& .MuiTypography-h3": {
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '29px',
            color: '#C0C0C0',
        },

    },
    logoutBox: {
        marginTop: '290px'
    }


}));

function SideBar() {
    
    const classes = useStyles();
    return (
        <>
            <Box className={classes.OuterContainer}>
                <Box className={classes.profileBox}>
                    <img src={Dummy} alt="profile" />
                </Box>
                <Box className={classes.sideBaroptionsWrapper}>
                    <Box className={classes.sideBarOptionBox}>
                        <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.5005 0.5H3.50049C1.57549 0.5 0.000488281 2.075 0.000488281 4V32C0.000488281 33.925 1.57549 35.5 3.50049 35.5H24.5005C26.4255 35.5 28.0005 33.925 28.0005 32V4C28.0005 2.075 26.4255 0.5 24.5005 0.5ZM8.75049 4H12.2505V12.75L10.5005 11.4375L8.75049 12.75V4ZM24.5005 32H3.50049V4H5.25049V19.75L10.5005 15.8125L15.7505 19.75V4H24.5005V32Z" fill="#C0C0C0" />
                        </svg>
                        <Typography variant='h3'>
                            All Journals

                        </Typography>


                    </Box>
                    <Box className={classes.sideBarOptionBox}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.605 10.785L21.215 12.395L5.36 28.25H3.75V26.64L19.605 10.785ZM25.905 0.25C25.4675 0.25 25.0125 0.425 24.68 0.7575L21.4775 3.96L28.04 10.5225L31.2425 7.32C31.925 6.6375 31.925 5.535 31.2425 4.8525L27.1475 0.7575C26.7975 0.4075 26.36 0.25 25.905 0.25ZM19.605 5.8325L0.25 25.1875V31.75H6.8125L26.1675 12.395L19.605 5.8325Z" fill="#C0C0C0" />
                        </svg>
                        <Typography variant='h3'>
                            Drafts

                        </Typography>

                    </Box>
                    <Box className={classes.sideBarOptionBox}>
                        <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 27.2225L28.815 33.75L25.945 21.4475L35.5 13.17L22.9175 12.1025L18 0.5L13.0825 12.1025L0.5 13.17L10.055 21.4475L7.185 33.75L18 27.2225Z" fill="#C0C0C0" />
                        </svg>
                        <Typography variant='h3'>
                            Favorites

                        </Typography>

                    </Box>
                    <Box className={classes.sideBarOptionBox}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.4952 18.6379C29.5582 18.1129 29.6002 17.5669 29.6002 17C29.6002 16.433 29.5582 15.887 29.4742 15.362L33.0232 12.59C33.3382 12.338 33.4222 11.876 33.2332 11.519L29.8732 5.70195C29.6632 5.32395 29.2222 5.19795 28.8442 5.32395L24.6652 7.00395C23.7832 6.33195 22.8592 5.78595 21.8302 5.36595L21.2002 0.913951C21.1372 0.493951 20.7802 0.199951 20.3602 0.199951H13.6402C13.2202 0.199951 12.8842 0.493951 12.8212 0.913951L12.1912 5.36595C11.1622 5.78595 10.2172 6.35295 9.35619 7.00395L5.17719 5.32395C4.79919 5.17695 4.35819 5.32395 4.14819 5.70195L0.788187 11.519C0.578187 11.897 0.662187 12.338 0.998187 12.59L4.54719 15.362C4.46319 15.887 4.40019 16.454 4.40019 17C4.40019 17.5459 4.44219 18.1129 4.52619 18.6379L0.977186 21.41C0.662186 21.662 0.578187 22.1239 0.767187 22.4809L4.12719 28.298C4.33719 28.676 4.77819 28.802 5.15619 28.676L9.33519 26.996C10.2172 27.6679 11.1412 28.2139 12.1702 28.6339L12.8002 33.0859C12.8842 33.506 13.2202 33.7999 13.6402 33.7999H20.3602C20.7802 33.7999 21.1372 33.506 21.1792 33.0859L21.8092 28.6339C22.8382 28.2139 23.7832 27.6469 24.6442 26.996L28.8232 28.676C29.2012 28.823 29.6422 28.676 29.8522 28.298L33.2122 22.4809C33.4222 22.1029 33.3382 21.662 33.0022 21.41L29.4952 18.6379ZM17.0002 23.2999C13.5352 23.2999 10.7002 20.465 10.7002 17C10.7002 13.535 13.5352 10.7 17.0002 10.7C20.4652 10.7 23.3002 13.535 23.3002 17C23.3002 20.465 20.4652 23.2999 17.0002 23.2999Z" fill="#C0C0C0" />
                        </svg>
                        <Typography variant='h3'>
                            Settings

                        </Typography>

                    </Box>
                </Box>
                <Box className={classes.logoutBox}>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_10)">
                            <path d="M27.4997 23.8337C26.4859 23.8337 25.6665 24.6551 25.6665 25.6669V33.0004C25.6665 34.0105 24.8451 34.8336 23.833 34.8336H18.333V7.33388C18.333 5.76822 17.3357 4.3694 15.8362 3.84875L15.2934 3.66714H23.833C24.8451 3.66714 25.6665 4.49025 25.6665 5.50068V11.0006C25.6665 12.0124 26.4859 12.8338 27.4997 12.8338C28.5135 12.8338 29.3329 12.0124 29.3329 11.0006V5.50068C29.3329 2.46839 26.8653 0.000732422 23.833 0.000732422H4.12496C4.05513 0.000732422 3.99672 0.0319516 3.92891 0.0410152C3.84063 0.0336301 3.75637 0.000732422 3.66674 0.000732422C1.64454 0.000732422 0 1.64494 0 3.66714V36.6668C0 38.2325 0.997334 39.6313 2.49686 40.1519L13.53 43.8297C13.9039 43.9452 14.2759 44.0003 14.6666 44.0003C16.6888 44.0003 18.333 42.3557 18.333 40.3335V38.5003H23.833C26.8653 38.5003 29.3329 36.0327 29.3329 33.0004V25.6669C29.3329 24.6551 28.5135 23.8337 27.4997 23.8337Z" fill="#84CCC5" />
                            <path d="M43.4622 17.0376L36.1287 9.70441C35.6047 9.18006 34.8162 9.02229 34.1307 9.30628C33.4469 9.59061 32.9994 10.2596 32.9994 11.0005V16.5004H25.6663C24.6542 16.5004 23.8328 17.3215 23.8328 18.3336C23.8328 19.3458 24.6542 20.1669 25.6663 20.1669H32.9994V25.6668C32.9994 26.4077 33.4469 27.0767 34.1307 27.361C34.8162 27.645 35.6047 27.4872 36.1287 26.9632L43.4622 19.6297C44.1789 18.9131 44.1789 17.7542 43.4622 17.0376Z" fill="#84CCC5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_10">
                                <rect width="44" height="44" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </Box>

            </Box>
        </>
    )
}

export default SideBar