import { Component } from "react";
import Catatan from "../../component/catatan/catatan";
import SearchInput from "../../component/search/search";
import { getAllNotes,getActiveNotes } from "../../utils/local-data";
import { Link } from "react-router-dom";


class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            data : getAllNotes(),
            dataAktif : getActiveNotes()
        }
    }
    render(){
        return(
        <main>
            <section className='homepage'></section>
            <h2>Catatan Aktif</h2>
            <SearchInput/>
           <Catatan data={this.state.dataAktif}/>
            <div className="homepage__action">
            <Link to="/notes/new">
              <button className="action" type="button" title="Tambah">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
              </button>
            </Link>                
            </div>
        </main>
        )
    }
}

export default Home;