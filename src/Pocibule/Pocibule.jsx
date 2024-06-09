import { node } from "react-proptypes"
import style from "./style.module.scss"

function Pocibule (props){
    return <div className={style.board} style={{backgroundImage:`url(${props.background})`}}>
                {props.cols.map(Column)}
                {props.nodes.map(Node)}
        </div>
}



function Column(data){
    return <div className={style.col}>
            <div className={style.colHeader}>{data.title}</div>
            <div className={style.colBody}></div>
        </div>
}
function Node(data){
    return <div draggable style={{backgroundColor:data.color, left: `${data.posX}px`, top: `${data.posY}px`, width: `${data.width}px`, height: `${data.height}px`}} className={style.node}>{data.title}</div>
}

export default Pocibule