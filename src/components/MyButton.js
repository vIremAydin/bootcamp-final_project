import "./button-style.css"


const MyButton = ({name,  onClick}) =>{

    return(<div>
        {
                <button  className={"Active"} onClick={() =>onClick(name)}
                      >{name}
                </button>
        }
    </div>

    );
}
export default MyButton;
