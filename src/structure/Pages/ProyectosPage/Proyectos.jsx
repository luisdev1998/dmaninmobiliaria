import { useState } from "react";
import { faSearch, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Proyectos(props) {
  const { Data } = props;
  const [selectedDep, setSelectedDep] = useState(0);
  const [selectedProv, setSelectedProv] = useState(0);
  const [selectedDistr, setSelectedDistr] = useState(0);
  const [filteredProvs, setFilteredProvs] = useState([]);
  const [filteredDists, setFilteredDists] = useState([]);
  const [filterProyectos, setFilteredProyectos] = useState(Data.ProyectosLista);

  const handleDepChange = (e) => {
    const depId = parseInt(e.target.value);
    setSelectedDep(depId);

    if (depId === 0) {
      setFilteredProvs([]);
      setFilteredDists([]);
      setSelectedProv(0);
      setSelectedDistr(0);
    } else {
      const provs = Data.provincias.filter((p) => p.departamento === depId);
      setFilteredProvs(provs);
      setSelectedProv(provs[0]?.id || 0);

      const dists = Data.distritos.filter((d) => d.provincia === provs[0]?.id);
      setSelectedDistr(dists[0]?.id || 0);
      setFilteredDists(dists);
    }
  };
  const handleProvChange = (e) => {
    const provId = parseInt(e.target.value);
    setSelectedProv(provId);

    const dists = Data.distritos.filter((d) => d.provincia === provId);
    setSelectedDistr(dists[0]?.id || 0);
    setFilteredDists(dists);
  };
  const handleDistrChange = (e) => {
    const distrvId = parseInt(e.target.value);
    setSelectedDistr(distrvId);
  };
  const buscarProyectos = () => {
    if (selectedDep === 0) {
      setFilteredProyectos(Data.ProyectosLista);
    } else {
      const filter = Data.ProyectosLista.filter(
        (d) =>
          d.informacion.departamento === selectedDep &&
          d.informacion.provincia === selectedProv &&
          d.informacion.distrito === selectedDistr
      );
      setFilteredProyectos(filter);
    }
  };

  return (
    <div>
      <section id="ProyectosLista" className="flex horizontal-center">
        <div className="space-container">
          <div className="text-principal-bold text-size-1 text-center sombra">
            <label className="text-black">BUSCA TU </label>
            <label className="text-red">PUNTO IDEAL</label>
          </div>
          <div className="line-decorate sombra">
            <div className="red"></div>
          </div>
          <br />
          {/* <div className="horizontal-select-col-4 gap-1em" style={{marginBottom:"30px"}}>
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
                    </div> */}
          <div className="flex row-direction horizontal-center horizontal-col-3 gap-20px">
            {filterProyectos.map((element, index) => {
              return (
                <a
                  key={index}
                  className="card white sombra flex column-direction"
                  onClick={() =>
                    window.open("/Proyectos/" + element.id, "_self")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img className="sombra" src={element.informacion.img} />
                  <div
                    className="flex column-direction gap-10px padding-1em"
                    style={{ flex: 1 }}
                  >
                    <div className="text-secundario-regular text-red text-size-3">
                      <FontAwesomeIcon icon={faBuilding} />{" "}
                      {element.informacion.estado}
                    </div>
                    <div className="text-secundario-bold text-center text-black text-size-3">
                      {element.informacion.titulo}
                    </div>
                    <div className="text-secundario-regular text-black flex gap-5px text-size-4">
                      <label>Metrajes: </label>
                      {element.metrajes.map((metraje, index) => {
                        return (
                          <label className="metraje text-size-4" key={index}>
                            {metraje}
                          </label>
                        );
                      })}
                    </div>
                    <div className="line-decorate-text gray-light"></div>
                    <div
                      className="text-secundario-regular text-gray text-size-5"
                      style={{ flex: 1 }}
                    >
                      {element.informacion.descripcion}
                    </div>
                    <button className="btn red text-secundario-bold text-white text-size-4 sombra">
                      Más Información
                    </button>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Proyectos;
