import { useState } from "react";
import { faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "../../../components/Carousel";

function Proyectos(props){
    
    const {Data} = props;
    const [selectedDep, setSelectedDep] = useState(0);
    const [selectedProv, setSelectedProv] = useState(0);
    const [selectedDistr, setSelectedDistr] = useState(0);
    const [filteredProvs, setFilteredProvs] = useState([]);
    const [filteredDists, setFilteredDists] = useState([]);
    const [filterProyectos, setFilteredProyectos] = useState(Data.proyectos);

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
    };
    const buscarProyectos = () => {
        console.log(selectedDep + " - " + selectedProv  + " - " + selectedDistr);
        if(selectedDep === 0){
            setFilteredProyectos(Data.Proyectos);
        }else{
            const filter = Data.Proyectos.filter(d => 
                d.informacion.departamento === selectedDep && 
                d.informacion.provincia === selectedProv && 
                d.informacion.distrito === selectedDistr
            );
            setFilteredProyectos(filter);
        }
    };

    return(
        <div>
            <div id='ProyectosBanner'>
                <Carousel images={Data.ProyectosPage}/>
            </div>
            <div id='ProyectosLista' className='space-container'>
                <div className='text-principal-bold text-size-1 text-center sombra'>
                    <label className="text-black">BUSCA TU </label>
                    <label className="text-red">PUNTO IDEAL</label>
                </div>
                <div className="line-decorate sombra">
                    <div className="red"></div>
                </div>
                
                <div className="horizontal-select-col-4" style={{marginBottom:"30px"}}>
                    <div>
                        <label className="text-secundario-regular text-size-4">DEPARTAMENTO</label>
                        <select value={selectedDep} onChange={handleDepChange} className="text-secundario-regular text-size-4 text-red  sombra" style={{width:"100%"}}>
                            {
                                Data.departamentos.map(dep => (
                                    <option key={dep.id} value={dep.id}>{dep.nombre}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>
                        <label className="text-secundario-regular text-size-4">PROVINCIA</label>
                        <select value={selectedProv} onChange={handleProvChange} className="text-secundario-regular text-size-4 text-red sombra" style={{width:"100%"}}>
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

                    <div>
                        <label className="text-secundario-regular text-size-4">DISTRITO</label>
                        <select value={selectedDistr} onChange={handleDistrChange} className="text-secundario-regular text-size-4 text-red sombra" style={{width:"100%"}}>
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

                    <button className="btn red text-white text-secundario-bold text-size-4 sombra" onClick={buscarProyectos}>
                        <FontAwesomeIcon icon={faSearch}/> BUSCAR
                    </button>
                </div>

                <div className='flex row-direction horizontal-center horizontal-col-4'>
                    {
                        filterProyectos.map((element, index) => {
                            return(
                                <a key={index} className="card white sombra flex column-direction gap-10" onClick={() => window.open("/Proyectos/"+element.id,"_self")}>
                                    <div className="card-estado dark-red">
                                        <label className="text-secundario-regular text-white text-size-4 sombra">{element.informacion.estado}</label>
                                    </div>
                                    <img src={element.informacion.img} width={"100%"} height={200}/>
                                    <div className="text-secundario-regular text-red text-size-4">
                                        <FontAwesomeIcon icon={faMapMarker}/> {element.informacion.direccion}
                                    </div>
                                    <div className="text-secundario-regular text-black text-size-3">
                                        {element.informacion.titulo}
                                    </div>
                                    <div className="text-secundario-regular text-black flex gap-5 text-size-4">
                                        <label>Metrajes: </label>
                                        {
                                            element.metrajes.map((metraje, index) => {
                                                return(
                                                    <label className="metraje text-size-4" key={index}>{metraje}</label>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="line-decorate-text gray-light"></div>
                                    <div className="text-secundario-regular text-gray text-size-5" style={{flex:1}}>
                                        {element.informacion.descripcion}
                                    </div>
                                    <button className="btn red text-secundario-bold text-white text-size-4 sombra">
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

export default Proyectos;