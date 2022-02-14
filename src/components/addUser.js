import {makeStyles} from "@material-ui/core/styles";
import {Button, FormControlLabel, FormGroup, Switch, TextField} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#b4d9ee",
        padding: "20px",
        borderRadius: "20px",
        width: "50%",
        margin: "15px"
    },
    itm: {
        margin: "10px",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-evenly"
    },
    btn: {
        backgroundColor: "#077cbe",
        width: "150px",
        margin: "10px"
    }


});
const AddUser = () => {
    const classes = useStyles();
    const [isVisible, setVisible] = useState(false);
    const [ID, setID] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telNo, setTelNo] = useState(0);
    const [carInfo, setCarInfo] = useState("");

    function handler() {
        setVisible(false);
        return undefined;
    }

    // email validation
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    return (
        <div>
            {
                isVisible ?
                    (
                        <div className={classes.container}>
                            <TextField className={classes.itm} id="outlined-basic" label="Ad-Soyad" variant="outlined"
                                       onChange={(event) => setName(event.target.value)}/>
                            <TextField className={classes.itm} id="outlined-basic" label="Email" variant="outlined"
                                       onChange={(event) => setEmail(event.target.value)}/>
                            <TextField className={classes.itm} id="outlined-basic" label="TC Kimlik No"
                                       variant="outlined" type={"number"}
                                       onChange={(event) => setID(event.target.value)}/>
                            <TextField className={classes.itm} id="outlined-basic" label="Telefon No" variant="outlined"
                                       type={"number"} onChange={(event) => setTelNo(event.target.value)}/>
                            <TextField className={classes.itm} id="outlined-basic" label="Araba Bilgisi"
                                       variant="outlined" onChange={(event) => setCarInfo(event.target.value)}/>
                            <div className={classes.buttons}>
                                <Button className={classes.btn} onClick={() => handler()}>Kaydet</Button>
                                <Button className={classes.btn} onClick={() => setVisible(false)}>İptal</Button>
                            </div>

                        </div>
                    ) :
                    <Button className={classes.btn} onClick={() => setVisible(true)}>Kullanıcı Ekle</Button>
            }
        </div>

    )
}

export default AddUser;
