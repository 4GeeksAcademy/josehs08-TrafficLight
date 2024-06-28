import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [color, setColor] = useState("rojo");
	const [display, setDisplay] = useState("d-none");

	function alternar(){
		if(color === "rojo") {setColor("amarillo"); return;}
		if (color === "amarillo"){ setColor("verde"); return;}
		if(color === "verde" && display ==="d-flex morado") {
			setColor("morado");
			return
		} else if(color==="verde"){
			setColor("rojo");
			return
		}
		if(color === "morado") setColor("rojo");
		return;
	}

	function mostrarMorado(){
		if(display === "d-flex morado"){
			setDisplay("d-none");
			return;
		}
		setDisplay("d-flex morado");
	}

	return (
		<div className="container d-flex justify-content-center">
			<div className="poste">
			</div>
			<div className="semaforo d-flex flex-column gap-3">
				<button onClick={()=>{setColor("rojo")}} className={`${color === "rojo" ? "rojo encendido" : "rojo inactivo"}`}></button>
				<button onClick={()=>{setColor("amarillo")}} className={`${color === "amarillo" ? "amarillo encendido " : "amarillo inactivo"}`}></button>
				<button onClick={()=>{setColor("verde")}} className={`${color === "verde"? "verde encendido" : "verde inactivo"}`}></button>
				<button onClick={()=>{setColor("morado")}}className={`${display} ${color === "morado"? "morado encendido" : "morado inactivo"}`}></button>
				<button className="option" onClick={()=>{alternar()}}>Alternar</button>
				<button className="option" onClick={()=>{mostrarMorado()}}>Agregar morado</button>
			</div>
		</div>
	);
};

export default Home;
