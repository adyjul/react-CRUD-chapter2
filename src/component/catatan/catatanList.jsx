import react from "react";
import {showFormattedDate} from '../../utils/index';

const CatatanList = (props) =>{
    return(
        props.data.map(({id,title,body,createdAt}) => (
            <article key={id} className="note-item">
                <h3 className="note-item__title">
                    <a href="/notes/notes-1">{title}</a>
                </h3>
                <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </article>   
        ))
    )
}

export default CatatanList;