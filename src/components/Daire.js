import {makeStyles} from "@material-ui/core/styles";
import MyButton from "./MyButton";
import {Button} from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        border: "solid #023047",
        borderRadius: "20px",
        padding: "20px",
        width: "300px",
        backgroundColor:"#ffc36c",
    }

});


const Daire = ({blockNo, empty, type}) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <span>Blok No : {blockNo}</span>
            <span>Durum : {empty ? "Boş" : "Dolu"}</span>
            <span>Tip : {type}</span>
            <Button  onClick={() => {}}>Düzenle</Button>
            <Button  onClick={() => {}}>Sil</Button>
        </div>
    )
}
export default Daire;
