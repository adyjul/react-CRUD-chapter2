import {Component} from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { getNote,archiveNote,deleteNote,unarchiveNote} from "../../utils/local-data";
import DetailPage from "../../component/detail/detailPage";

const Detail = () => {
    const {id} = useParams();    
    const navigate = useNavigate();
    return <DetailComponent id={id} navigate={navigate} />
}

class DetailComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : getNote(this.props.id)
        }
        this.changeNote = this.changeNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    changeNote(id,status){     
        !status ?  archiveNote(id) : unarchiveNote(id);
        return this.props.navigate('/');
    }

    deleteNote(id){
        deleteNote(id);
        return this.props.navigate('/');
    }

    render(){         
        return(
            <main>
                <section className="detail-page">
                    <DetailPage data={this.state.data} changeNote={this.changeNote} deleteNote={this.deleteNote} />
                </section>
            </main>
        )
    }
}

DetailComponent.propTypes = {
    id : PropTypes.string.isRequired,
    navigate :PropTypes.func.isRequired
}

export default Detail;