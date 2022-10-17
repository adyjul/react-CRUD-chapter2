import { Component } from "react";
import { Link } from "react-router-dom";
import { addNote } from "../../utils/local-data";
import { useNavigate } from "react-router-dom";
import {Home} from '../index';
import PropTypes from 'prop-types';


const TambahData = () =>{
    const navigate = useNavigate();
    return <TambahDataComponent navigate={navigate}/>
}

class TambahDataComponent extends Component{
    constructor(props,context){
        super(props);
        this.state = {          
            judul : "",
            isi : ""
        }

        this.onHandlerInpurJudul = this.onHandlerInpurJudul.bind(this);
        this.onHandlerInputIsi = this.onHandlerInputIsi.bind(this);
        this.onInputSubmitData = this.onInputSubmitData.bind(this);
    }

    onHandlerInputIsi(e){      
        this.setState(() => {
            return{
                isi : e.target.innerHTML
            }
        })       
    }

    onHandlerInpurJudul(e){
        this.setState(() => {
            return{
                judul : e.target.value
            }
        })   
    }

    onInputSubmitData(e){
        e.preventDefault();         
        addNote({
            title : this.state.judul,
            body : this.state.isi
        });
        return  this.props.navigate('/')
         
    }   

    render(){
        return(
            <main>
                <form onSubmit={this.onInputSubmitData}>
                    <section className="add-new-page">
                        <div className="add-new-page__input">
                            <input className="add-new-page__input__title" placeholder="Catatan rahasia" value={this.state.judul} onChange={this.onHandlerInpurJudul} type="text" />
                            <div className="add-new-page__input__body" data-placeholder="Sebenarnya saya adalah ...." contentEditable onInput={this.onHandlerInputIsi} value={this.state.isi}>
                        </div>
                        </div>                 
                            <div className="add-new-page__action">
                                <button className="action" type="submit" title="Simpan"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path></svg>
                            </button>
                            </div>                       
                    </section>
                </form>
            </main>
        )
    }
}

TambahDataComponent.propTypes = {
    navigate : PropTypes.func.isRequired
}

export default TambahData;