import { useState } from "react";
import { useParams } from 'react-router-dom';

function LoteInfo(props){

    const {Data} = props;
    const { id } = useParams();
    const Lote = Data.lotes.find(d => d.id == id);
    const [Info,setInfo] = useState(Lote);

    return(
        <div>
            <div id="LoteInfo">
                <div className="space-container flex horizontal-select-col-2" style={{position:"absolute",width:"80%"}}>
                    <div style={{width:"auto"}}>
                        <label className="text-title text-red" style={{fontSize:"2rem"}}>Conoce el Proyecto</label>
                        <br></br>
                        <label className="text-title text-white" style={{fontSize:"3rem"}}>{Info.informacion.titulo}</label>
                    </div>
                    <iframe
                            height="400" 
                            src={Info.page.video} 
                            title="asd" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                            style={{border:"none", minWidth:"100%"}}
                        >
                    </iframe>
                </div>
                <img src={Info.page.fondo} style={{width: '100%', height: '500px'}}/>
            </div>
        </div>
    )
}

export default LoteInfo;