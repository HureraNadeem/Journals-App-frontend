import React from 'react';
import styles from './editor.module.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box } from '@material-ui/core';
import makeStyles from "@material-ui/core/styles/makeStyles";

import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

import { useContext } from "react";
import { DataContext } from '../../App';


import Menu from '@mui/material/Menu';


const useStyles = makeStyles(theme => ({
    fontInput: {
        width: '150px',
        height: '40px',
        border: '2px solid #EDF6F9',
        borderRadius: '10px',
    }


}));


function Editor() {
    let { setData } = useContext(DataContext);
    console.log(setData(prev=>prev));
    const [state, setState] = React.useState({ value: null });
    const [newHeading, setNewHeading] = React.useState("");
    const [newPara, setNewPara] = React.useState("");
    const handleChange = value => {
        setState({ value });
    };

    const handleHeadingChange = (e) => {
        setNewHeading(e.target.value);

    }
    const handleParaChange = (e) => {
        setNewPara(e.target.value);
    }

    const handleSave = () => {

        setData((prev) => console.log(prev))

    }

    // const [age, setAge] = React.useState('');

    // const handleChange = (e) => {
    //     setAge(e);
    // };


    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className={styles.outerContainer}>
                <div className={styles.upperMenu}>
                    <div className={styles.firstPart}>
                        <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 4.25H30.25V0.75H26.75V4.25H9.25V0.75H5.75V4.25H4C2.075 4.25 0.5 5.825 0.5 7.75V35.75C0.5 37.675 2.075 39.25 4 39.25H32C33.925 39.25 35.5 37.675 35.5 35.75V7.75C35.5 5.825 33.925 4.25 32 4.25ZM32 35.75H4V16.5H32V35.75ZM32 13H4V7.75H32V13Z" fill="#006D77" />
                        </svg>
                        <div className={styles.timeAndDate}>
                            <h2>25th-January'21</h2>
                            <h3>Monday</h3>
                        </div>
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="28" height="8" viewBox="0 0 28 8" fill="none">
                            <path d="M3.5 0.5C1.575 0.5 0 2.075 0 4C0 5.925 1.575 7.5 3.5 7.5C5.425 7.5 7 5.925 7 4C7 2.075 5.425 0.5 3.5 0.5ZM24.5 0.5C22.575 0.5 21 2.075 21 4C21 5.925 22.575 7.5 24.5 7.5C26.425 7.5 28 5.925 28 4C28 2.075 26.425 0.5 24.5 0.5ZM14 0.5C12.075 0.5 10.5 2.075 10.5 4C10.5 5.925 12.075 7.5 14 7.5C15.925 7.5 17.5 5.925 17.5 4C17.5 2.075 15.925 0.5 14 0.5Z" fill="#006D77" />
                        </svg>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem style={{ paddingBottom: '15px' }} onClick={handleClose}>
                                <svg width="25" height="25" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.25 24.64C24.92 24.64 23.73 25.165 22.82 25.9875L10.3425 18.725C10.43 18.3225 10.5 17.92 10.5 17.5C10.5 17.08 10.43 16.6775 10.3425 16.275L22.68 9.0825C23.625 9.9575 24.8675 10.5 26.25 10.5C29.155 10.5 31.5 8.155 31.5 5.25C31.5 2.345 29.155 0 26.25 0C23.345 0 21 2.345 21 5.25C21 5.67 21.07 6.0725 21.1575 6.475L8.82 13.6675C7.875 12.7925 6.6325 12.25 5.25 12.25C2.345 12.25 0 14.595 0 17.5C0 20.405 2.345 22.75 5.25 22.75C6.6325 22.75 7.875 22.2075 8.82 21.3325L21.28 28.6125C21.1925 28.98 21.14 29.365 21.14 29.75C21.14 32.5675 23.4325 34.86 26.25 34.86C29.0675 34.86 31.36 32.5675 31.36 29.75C31.36 26.9325 29.0675 24.64 26.25 24.64ZM26.25 3.5C27.2125 3.5 28 4.2875 28 5.25C28 6.2125 27.2125 7 26.25 7C25.2875 7 24.5 6.2125 24.5 5.25C24.5 4.2875 25.2875 3.5 26.25 3.5ZM5.25 19.25C4.2875 19.25 3.5 18.4625 3.5 17.5C3.5 16.5375 4.2875 15.75 5.25 15.75C6.2125 15.75 7 16.5375 7 17.5C7 18.4625 6.2125 19.25 5.25 19.25ZM26.25 31.535C25.2875 31.535 24.5 30.7475 24.5 29.785C24.5 28.8225 25.2875 28.035 26.25 28.035C27.2125 28.035 28 28.8225 28 29.785C28 30.7475 27.2125 31.535 26.25 31.535Z" fill="#2E858D" />
                                </svg>
                                <span style={{ marginLeft: '20px' }}>Share</span>


                            </MenuItem>

                            <MenuItem style={{ paddingBottom: '15px' }} onClick={handleClose}>
                                <svg width="25" height="25" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.75 8.75H28V0H7V8.75H5.25C2.345 8.75 0 11.095 0 14V24.5H7V31.5H28V24.5H35V14C35 11.095 32.655 8.75 29.75 8.75ZM10.5 3.5H24.5V8.75H10.5V3.5ZM24.5 24.5V28H10.5V21H24.5V24.5ZM28 21V17.5H7V21H3.5V14C3.5 13.0375 4.2875 12.25 5.25 12.25H29.75C30.7125 12.25 31.5 13.0375 31.5 14V21H28Z" fill="#2E858D" />
                                </svg>
                                <span style={{ marginLeft: '20px' }}>Print</span>


                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <svg width="25" height="25" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.25 10.5V28H5.25V10.5H19.25ZM16.625 0H7.875L6.125 1.75H0V5.25H24.5V1.75H18.375L16.625 0ZM22.75 7H1.75V28C1.75 29.925 3.325 31.5 5.25 31.5H19.25C21.175 31.5 22.75 29.925 22.75 28V7Z" fill="#2E858D" />
                                </svg>

                                <span style={{ marginLeft: '20px' }}>Delete</span>
                            </MenuItem>
                        </Menu>
                    </div>

                    <div className={styles.secondPart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30" fill="none">
                            <path d="M10.9997 4.33331V0.333313L5.66634 5.66665L10.9997 11V6.99998C15.413 6.99998 18.9997 10.5866 18.9997 15C18.9997 16.3466 18.6663 17.6266 18.0663 18.7333L20.013 20.68C21.053 19.04 21.6663 17.0933 21.6663 15C21.6663 9.10665 16.893 4.33331 10.9997 4.33331ZM10.9997 23C6.58634 23 2.99967 19.4133 2.99967 15C2.99967 13.6533 3.33301 12.3733 3.93301 11.2666L1.98634 9.31998C0.946341 10.96 0.333008 12.9066 0.333008 15C0.333008 20.8933 5.10634 25.6666 10.9997 25.6666V29.6666L16.333 24.3333L10.9997 19V23Z" fill="#006D77" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
                            <g filter="url(#filter0_d_2_760)">
                                <rect x="16" y="8" width="36" height="36" rx="10" fill="#006D77" />
                            </g>
                            <g clip-path="url(#clip0_2_760)">
                                <path d="M32 25.5H25.915L28.71 22.705L28 22L24 26L28 30L28.705 29.295L25.915 26.5H32V25.5Z" fill="white" />
                            </g>
                            <g clip-path="url(#clip1_2_760)">
                                <path d="M36 26.5H42.085L39.29 29.295L40 30L44 26L40 22L39.295 22.705L42.085 25.5H36V26.5Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_2_760" x="0" y="0" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="8" />
                                    <feGaussianBlur stdDeviation="8" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.427451 0 0 0 0 0.466667 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_760" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_760" result="shape" />
                                </filter>
                                <clipPath id="clip0_2_760">
                                    <rect width="12" height="12" fill="white" transform="translate(22 20)" />
                                </clipPath>
                                <clipPath id="clip1_2_760">
                                    <rect width="12" height="12" fill="white" transform="translate(46 32) rotate(-180)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className={styles.editorOptions}>
                    <div className={styles.firstPartOptions}>
                        {/* <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                className={classes.fontInput}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl> */}
                        <div className="text-editor">
                            <EditorToolbar />
                            <ReactQuill
                                theme="snow"
                                value={state.value}
                                onChange={handleChange}
                                placeholder={"Write something awesome..."}
                                modules={modules}
                                formats={formats}
                            />
                        </div>
                    </div>
                    <div className={styles.secondPartOptions}>
                        {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                // value={values.weight}
                                onChange={handleChange('weight')}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                            />
                            <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                        </FormControl> */}
                        <input value={newHeading} onChange={handleHeadingChange} type="text" className={styles.inputHeading} />
                        <textarea value={newPara} onChange={handleParaChange} class={styles.textArea}></textarea>
                        <Button onClick={handleSave}>Save</Button>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Editor