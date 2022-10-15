import CatatanList from "./catatanList";

const Catatan = (props) =>{
    return(
        <section className="notes-list">
            {
                props.data != "" ?  <CatatanList data={props.data}/> : <p className="notes-list__empty-message">Tidak ada catatan</p>
            }                             
        </section>
    )
}

export default Catatan;