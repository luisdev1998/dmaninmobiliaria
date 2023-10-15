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
                <img src={Info.page.fondo} style={{width: '100%', height: '500px'}}/>
                <iframe 
                width="887" 
                height="499" 
                src="https://www.youtube.com/embed/8EbjtG5_FkA" 
                title="asd" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                >
                </iframe>
            </div>
        </div>
    )
}

export default LoteInfo;