import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, TextField} from "@material-ui/core";
import {useEffect, useState} from "react";
import userLogo from "../images/userLogo.png"
import axios from "axios";
import {Link} from "react-router-dom";

// useStyles

const useStyles = makeStyles({
    loginContainer: {
        height: "500px",

        margin: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "solid #023047",
        borderRadius:"20px",
    },

    title: {
        color: "#023047",
        fontSize: "20px",
        textAlign:"center",
    },
    subtitle: {
        color: "#023047",
        fontSize: "15px",
        textAlign:"center",
        margin:"20px",
    },
    textfield: {
        margin: "30px"


    },

    loginButton: {
        marginTop: "40px",
        width: "100px",
        background: "#023047",
        color: "#ffffff",
        marginBottom: "8%",
    }
});

const Welcome = () => {
    const classes = useStyles();

    const [id, setId] = useState(0);
    const [password, setPassword] = useState('');
    const [isSuccessful, setSuccessful] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {

    }, [isSuccessful, id]);

    async function handleClick() {

        axios.get("http://localhost:8080/api/student/login/" + id + "/" + password).then((response) => {
            console.log(response.data);
            axios.get("http://localhost:8080/api/student/get/" + id).then((response) => {
                console.log(response.data);
                setUser(response.data);
            });
            setSuccessful(response.data);
        }).catch((error) => {
            console.log(error);
        })


    }


    return (
        <div>

            <p className={classes.title}>Welcome to Site Management</p>
            <Grid container>
                <Grid item xs={"6"}>
                    <Grid className={classes.loginContainer}>
                        <div className={classes.subtitle}>Yönetici Girişi</div>
                        <img src={userLogo} alt=""/>
                        <TextField id="outlined-basic" label="Site No" variant="outlined" className={classes.textfield}
                                   onChange={(event) => setId(event.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" className={classes.textfield}
                                   onChange={(event) => setPassword(event.target.value)}/>

                        <Link to={isSuccessful ? "/courses" : "/courses"}/>
                        <Button variant="contained"
                                className={classes.loginButton}
                                onClick={() => handleClick()}>
                            <Link to={isSuccessful ? "/manageSite" : "/welcome"}>Login</Link>
                        </Button>

                    </Grid>
                </Grid>
                <Grid item xs={"6"}>
                    <Grid className={classes.loginContainer}>
                        <div className={classes.subtitle}>Kullanıcı Girişi</div>
                        <img src={userLogo} alt=""/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" className={classes.textfield}
                                   onChange={(event) => setId(event.target.value)}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" className={classes.textfield}
                                   onChange={(event) => setPassword(event.target.value)}/>

                        <Link to={isSuccessful ? "/courses" : "/courses"}/>
                        <Button variant="contained"
                                className={classes.loginButton}
                                onClick={() => handleClick()}>
                            <Link to={"/manageSite"}>Login</Link>
                        </Button>

                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
};

export default Welcome;
