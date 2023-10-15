import { useState } from "react";
import { faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../../../components/Carousel";

function Lotes(props){
    
    const {Data} = props;
    const [selectedDep, setSelectedDep] = useState(0);
    const [selectedProv, setSelectedProv] = useState(0);
    const [selectedDistr, setSelectedDistr] = useState(0);
    const [filteredProvs, setFilteredProvs] = useState([]);
    const [filteredDists, setFilteredDists] = useState([]);
    const [filterLotes, setFilteredLotes] = useState(Data.lotes);

    const handleDepChange = (e) => {
        const depId = parseInt(e.target.value);
        setSelectedDep(depId);
    
        if (depId === 0) {
          setFilteredProvs([]);
          setFilteredDists([]);
          setSelectedProv(0);
          setSelectedDistr(0);
        } else {
          const provs = Data.provincias.filter(p => p.departamento === depId);
          setFilteredProvs(provs);
          setSelectedProv(provs[0]?.id || 0);
    
          const dists = Data.distritos.filter(d => d.provincia === provs[0]?.id);
          setSelectedDistr(dists[0]?.id || 0);
          setFilteredDists(dists);
        }
    };
    const handleProvChange = (e) => {
        const provId = parseInt(e.target.value);
        setSelectedProv(provId);
    
        const dists = Data.distritos.filter(d => d.provincia === provId);
        setSelectedDistr(dists[0]?.id || 0);
        setFilteredDists(dists);
    };

    const handleDistrChange = (e) => {
        const distrvId = parseInt(e.target.value);
        setSelectedDistr(distrvId);
    }

    const buscarLotes = () => {
        console.log(selectedDep + " - " + selectedProv  + " - " + selectedDistr);
        if(selectedDep === 0){
            setFilteredLotes(Data.lotes);
        }else{
            const filter = Data.lotes.filter(d => 
                d.informacion.departamento === selectedDep && 
                d.informacion.provincia === selectedProv && 
                d.informacion.distrito === selectedDistr
            );
            setFilteredLotes(filter);
        }
    }

    return(
        <div>
            <div id='Lotes'>
                <Carousel images={Data.LotesPage}/>
            </div>
            <div id='LotesLista' className='space-container'>
                <div className='text-title' style={{textAlign:"center"}}> 
                    <label className="text-black">Encuentra tu </label>
                    <label className="text-red">Punto ideal</label>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                    <div className="text-space red"></div>
                </div>
                
                <div className="horizontal-select-col-4" style={{textAlign:"center",marginBottom:"30px"}}>
                    <div style={{textAlign:'start'}}>
                        <label className="text-content-bold">Departamento</label>
                        <select value={selectedDep} onChange={handleDepChange} className="text-content" style={{width:"100%"}}>
                            {
                                Data.departamentos.map(dep => (
                                    <option key={dep.id} value={dep.id}>{dep.nombre}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div style={{textAlign:'start'}}>
                        <label className="text-content-bold">Provincia</label>
                        <select value={selectedProv} onChange={handleProvChange} className="text-content" style={{width:"100%"}}>
                            {
                                filteredProvs.length > 0 ? (
                                    filteredProvs.map(prov => (
                                        <option key={prov.id} value={prov.id}>{prov.nombre}</option>
                                    ))
                                ) : (
                                    <option value="0" disabled></option>
                                )
                            }
                        </select>
                    </div>

                    <div style={{textAlign:'start'}}>
                        <label className="text-content-bold">Distrito</label>
                        <select value={selectedDistr} onChange={handleDistrChange} className="text-content" style={{width:"100%"}}>
                            {
                                filteredDists.length > 0 ? (
                                    filteredDists.map(dist => (
                                        <option key={dist.id} value={dist.id}>{dist.nombre}</option>
                                    ))
                                ) : (
                                    <option value="0" disabled></option>
                                )
                            }
                        </select>
                    </div>

                    <button className="btn red text-white" style={{fontSize: "1.2rem"}} onClick={buscarLotes}>
                        <FontAwesomeIcon className="text-white" icon={faSearch}/> Buscar
                    </button>
                </div>

                <div className='flex horizontal-adjust horizontal-center horizontal-col-4'>
                    {
                        filterLotes.map((element, index) => {
                            return(
                                <a key={index} className="lote-card" style={{display:"flex",flexDirection:"column",gap:"5px"}}>
                                    <div className="card-estado dark-red">
                                        <label className="text-content text-white" style={{fontSize: "0.8rem"}}>{element.informacion.estado}</label>
                                    </div>
                                    <img src={element.informacion.img} style={{width:"100%",height:"200px"}}/>
                                    <div className="text-content text-red" style={{fontSize: "0.8rem"}}>
                                        <FontAwesomeIcon icon={faMapMarker}/> {element.informacion.direccion}
                                    </div>
                                    <div className="text-content-bold text-black">
                                        {element.informacion.titulo}
                                    </div>
                                    <div className="text-black" style={{display:"flex",gap:"5px"}}>
                                        <label className="text-content" style={{fontSize: "0.8rem"}}>Metrajes: </label>
                                        {
                                            element.metrajes.map((metraje, index) => {
                                                return(
                                                    <label className="text-content metraje" style={{fontSize: "0.8rem"}} key={index}>{metraje}</label>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="space-content"></div>
                                    <div className="text-content text-gray"  style={{fontSize: "0.8rem",flex:1}}>
                                        {element.informacion.descripcion}
                                    </div>
                                    <button className="btn red text-content-bold text-white">
                                        Más Información
                                    </button>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

// function Departamentos(lista,setDepartamento,departamento,setProvincia){
//     return(
//         <>
//             <div style={{textAlign:'start'}}>
//                 <label className="text-content-bold">Departamento</label>
//                 <select onChange={e => setDepartamento(e.target.value)} className="text-content" style={{width:"100%"}}>
//                 {
//                     lista.departamento.map((element) => {
//                         return(
//                             <option key={element.id} value={element.id}>{element.nombre}</option>
//                         )
//                     })
//                 }
//                 </select>
//             </div>
//             {Provincias(lista.provincias,departamento,setProvincia)}
//         </>
//     )
// }
// function Provincias(lista,departamento,setProvincia){
//     return(
//         <div style={{textAlign:'start'}}>
//             <label className="text-content-bold">Provincia</label>
//             <select onChange={e => setProvincia(e.target.value)} className="text-content" style={{width:"100%"}}>
//                 {
//                     lista.filter(filter => filter.departamento == departamento).map(element => {
//                         return (
//                             <option key={element.id} value={element.id}>{element.nombre}</option>
//                         )
//                     })
//                 }
//             </select>
//         </div>
//     )
// }
// function Distritos(lista,provincia){
//     return(
//         <div style={{textAlign:'start'}}>
//             <label className="text-content-bold">Distrito</label>
//             <select onChange={e => setProvincia(e.target.value)} className="text-content" style={{width:"100%"}}>
//                 {
//                     lista.filter(filter => filter.provincia == provincia).map(element => {
//                         return (
//                             <option key={element.id} value={element.id}>{element.nombre}</option>
//                         )
//                     })
//                 }
//             </select>
//         </div>
//     )
// }

export default Lotes;