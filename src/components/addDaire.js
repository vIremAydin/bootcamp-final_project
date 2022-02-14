import {makeStyles} from "@material-ui/core/styles";
import {Button, FormControlLabel, FormGroup, Switch, TextField} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection:"column",
        backgroundColor: "#b4d9ee",
        padding: "20px",
        borderRadius:"20px",
        width:"50%",
        margin:"15px"
    },
itm:{
        margin:"10px",
},
    buttons:{
        display:"flex",
        justifyContent:"space-evenly"
    },
    btn:{
        backgroundColor:"#077cbe",
        width: "150px",
        margin:"10px"
    }


});
const AddDaire = () => {
    const classes = useStyles();
    const [isVisible, setVisible] = useState(false);
    const [blockNo, setBlockNo] = useState(0);
    const [empty, setEmpty] = useState(true);
    const [type, setType] = useState("");
    const [floor, setFloor] = useState(0);
    const [no, setNo] = useState(0);
    const [owner, setOwner] = useState("");

    function handler() {
        setVisible(false);
        return undefined;
    }

    return (
        <div>
            {
                isVisible ?
                    (
                        <div className={classes.container}>
                            <TextField className={classes.itm} id="outlined-basic" label="Blok No" variant="outlined" type={"number"} onChange={(event) =>setBlockNo(event.target.value)}/>
                            <TextField className={classes.itm} id="outlined-basic" label="Kat No" variant="outlined" type={"number"} onChange={(event) =>setFloor(event.target.value)}/>
                            <TextField className={classes.itm} id="outlined-basic" label="Daire No" variant="outlined" type={"number"} onChange={(event) =>setNo(event.target.value)}/>
                            <TextField className={classes.itm}  id="outlined-basic" label="Tip" variant="outlined" onChange={(event) =>setType(event.target.value)}/>
                            <TextField className={classes.itm} id="outlined-basic" label="Sahibi" variant="outlined" onChange={(event) =>setOwner(event.target.value)}/>
                            <FormGroup>
                                <FormControlLabel control={<Switch color={"primary"} defaultChecked />} label="Dolu" onChange={() => setEmpty(!empty) }/>
                            </FormGroup>
                            <div className={classes.buttons}>
                                <Button className={classes.btn} onClick={() => handler()}>Kaydet</Button>
                                <Button className={classes.btn} onClick={() => setVisible(false)}>İptal</Button>
                            </div>

                        </div>
                    ):
                    <Button className={classes.btn} onClick={() => setVisible(true)}>Daire Ekle</Button>
            }
        </div>

    )
}

export default AddDaire;
