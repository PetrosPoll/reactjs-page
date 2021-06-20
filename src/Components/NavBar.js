import React from 'react';
import CustomBtn from './CustomBtn';
import logo from '../logo.png';
import logoMobile from '../logoMobile.svg';
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import { useHistory } from "react-router-dom";


const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        paddingLeft: "5rem",
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    },
    button25: {
        paddingLeft: "40rem",
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})



const NavBar = () => {
    const classes = styles()
    const history = useHistory();
    
    // Move to the next page, independs the parameter you giving
    const nextPage = (page) =>{ 
        history.push(page);
    }


    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                <div onClick={() => nextPage('./home')}>
                <Typography variant="h6" className={classes.menuItem}>
                    Home
                </Typography>
                </div>
                <div onClick={() => nextPage('./about')}>
                <Typography  variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                </div>
                <div className={classes.button25} >
                <CustomBtn txt="Trial Our Product"/>
                </div>
            </Toolbar>
    )
}

export default NavBar
