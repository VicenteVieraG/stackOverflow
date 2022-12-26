import {useState} from 'react';
import {FiHome, FiDatabase, FiPlus, FiBarChart, FiUsers, FiSettings, FiHelpCircle} from "react-icons/fi";
import SecondSideBar from './SecondSideBar';
import "../../styles/DSB.css";

const DoubleSidebar = () => {
	const [icons, setIcons] = useState([<FiHome/>, <FiDatabase/>, <FiPlus/>, <FiBarChart/>, <FiUsers/>, <FiSettings/>, <FiHelpCircle/>]);

	const getSimpleKey = () => Math.floor(Math.random() * 100000).toString(36);
	
	return (
		<>
			<div id="mainSB" className="mainSideBar">
				{icons.map(icon => <button key={getSimpleKey()} className="btn">{icon}</button>)}
			</div>
			<SecondSideBar/>
		</>
	)
}

export default DoubleSidebar