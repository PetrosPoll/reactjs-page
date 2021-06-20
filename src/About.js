import React from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "./no_photo.jpg";
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Footer from './Components/Footer';


const styles = makeStyles({
    wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "center"
    },
    bigSpace: {
        marginTop: "-10rem"
    },
    littleSpace: {
        marginTop: "2.5rem",

    },
    footer: {
        marginTop: "8rem",
        marginRight: "20rem",
    },
})

const About = () => {
    const classes = styles();

    return (
        <div className="myphoto">
            <ReactRoundedImage image={MyPhoto} />
            <div className="p1">
                <div className={classes.wrapper}>
                    <Typography variant="h4" className={classes.bigSpace} color="primary">
                        Petros Pollakis
                    </Typography>
                    <br />
                    <Typography variant="h5" className={classes.littleSpace} color="primary">
                        I'm Frontend developer. Build real projects and learn to code. Step by step. I love codiding and this is a demo website. I learn many libraries and understanded better the Reactjs!
                    </Typography>
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );

}

export default About;
