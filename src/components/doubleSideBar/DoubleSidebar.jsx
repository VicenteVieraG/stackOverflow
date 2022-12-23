import {useState} from 'react'
import {FiHome, FiDatabase, FiPlus, FiBarChart, FiUsers, FiSettings, FiHelpCircle} from "react-icons/fi"
import "../../styles/DSB.css"


const DoubleSidebar = () => {
	const [icons, setIcons] = useState([<FiHome/>, <FiDatabase/>, <FiPlus/>, <FiBarChart/>, <FiUsers/>, <FiSettings/>, <FiHelpCircle/>]);

	const getSimpleKey = () => Math.floor(Math.random() * 100000).toString(36);

	return (
		<>
			<div className="mainSideBar">
				{icons.map(icon => <button key={getSimpleKey()} className="btn">{icon}</button>)}
			</div>
			<div className="secondSideBar">
				xd
			</div>
		</>
	)
}

export default DoubleSidebar