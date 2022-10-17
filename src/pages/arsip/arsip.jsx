import { Component } from "react";
import { getArchivedNotes,getAllNotes } from "../../utils/local-data";
import SearchInput from "../../component/search/search";
import Catatan from "../../component/catatan/catatan";

class Arsip extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataArsip : getArchivedNotes()
        }
    }

    render(){
        console.log(getAllNotes())
        return(
            <main>
                <section className='homepage'></section>
                <h2>Catatan Arsip</h2>
                <SearchInput/>
                <Catatan data={this.state.dataArsip}/>                
            </main>
        )
    }
}

export default Arsip;