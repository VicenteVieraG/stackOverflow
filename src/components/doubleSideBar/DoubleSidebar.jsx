import React from 'react'
import {FiHome, FiDatabase, FiPlus, FiBarChart, FiUsers, FiSettings, FiHelpCircle} from "react-icons/fi"
import "../../styles/DSB.css"


const DoubleSidebar = () => {
	return (
		<>
			<div className="sideBarContainer">
				<div className="mainSideBar">
					<button className="btn"><FiHome className="icon"/></button>
					<button className="btn"><FiDatabase className="icon"/></button>
					<button className="btn"><FiPlus className="icon"/></button>
					<button className="btn"><FiBarChart className="icon"/></button>
					<button className="btn"><FiUsers className="icon"/></button>
					<button className="btn"><FiSettings className="icon"/></button>
					<button className="btn"><FiHelpCircle className="icon"/></button>
				</div>
				<div className="secondSideBar">
					xd
				</div>
			</div>
		</>
	)
}

export default DoubleSidebar