import CatatanList from "./catatanList";
import PropTypes from 'prop-types';

const Catatan = (props) =>{
    return(
        <section className="notes-list">
            {
                props.data != "" ?  <CatatanList data={props.data}/> : <p className="notes-list__empty-message">Tidak ada catatan</p>
            }                             
        </section>
    )
}

Catatan.propTypes ={
    data : PropTypes.array
}

export default Catatan;