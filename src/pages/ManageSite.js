import AddDaire from "../components/addDaire";
import {makeStyles} from "@material-ui/core/styles";
import MyButton from "../components/MyButton";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AddUser from "../components/addUser";
import Daire from "../components/Daire";

const useStyles = makeStyles({
    header: {
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#084462",
        padding: "20px",
    },
    containerButtons: {
        display: "flex"
    },
    h2: {
        color: "#084462",
        textAlign: "center",
    }

});

const ManageSite = () => {
    const classes = useStyles();
    const [tab, setTab] = useState(0); // 0 = daire tab
    const [daire, setDaire] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getDaire();
        getUsers();
    }, [daire, users]);

    function handler() {

    }

    function list(num) {
        setTab(num);
    }

    function getDaire() {
        axios.get("https://localhost:7030/Daire").then((response) => {
            console.log(response.data);
            setDaire(response.data);
        });
        // some default daire
        setDaire( [{blockNo:11, type:"2+1", empty : true }])
    }

    function getUsers() {
        axios.get("https://localhost:7030/Users").then((response) => {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <MyButton onClick={() => list(0)} name={"Daireleri Listele"}/>
                <MyButton onClick={() => list(1)} name={"Kişileri Listele"}/>
                <MyButton onClick={() => list(2)} name={"Mesaj"}/>
                <Link to={"/"}><MyButton onClick={() => {
                }} name={"Çıkış Yap"}/></Link>
            </div>
            <div className={classes.containerButtons}>
                <AddDaire/>
                <AddUser/>
            </div>
            <div>
                {tab === 0 ?
                    <h2 className={classes.h2}>Daireler</h2> :
                    tab === 1 ?
                        <h2 className={classes.h2}>Kişiler</h2> :
                        <h2 className={classes.h2}>Mesajlar</h2>
                }
                {
                    tab === 0 ?
                        daire?.map(d => (<Daire type={d.type} blockNo={d.blockNo} empty={d.empty}/>))
                        : users?.map(d => <div>{d.userName}</div>)

                }

            </div>
        </div>
    )
}

export default ManageSite;
