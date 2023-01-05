import {useState, useEffect, createRef} from 'react';
import {FiHome, FiDatabase, FiPlus, FiBarChart, FiUsers, FiSettings, FiHelpCircle} from "react-icons/fi";
import SecondSideBar from './SecondSideBar';
import "../../styles/DSB.css";

const DoubleSidebar = () => {
	const [icons, setIcons] = useState([<FiHome/>, <FiDatabase/>, <FiPlus/>, <FiBarChart/>, <FiUsers/>, <FiSettings/>, <FiHelpCircle/>]);
	const [compRef, setCompRef] = useState(createRef());

	//Set all Children Elements a Commo ID
	const setID = (parent, ID) => {
		const parentComps = Array.from(parent);
		
		for(var i=0;i<parentComps.length;i++){
			if(parentComps[i].className==="btn") ++ID.id;
			const children = parentComps[i].children;
			parentComps[i].id = ID.id;
			
			//BaSS case
			if(!children && i===parentComps.length) return;

			setID(children, ID);
		}
	}

	useEffect(() => {
		//Set all the corresponding ids
		const btns = document.getElementsByClassName("btn");
		const passIdByRef = {id:0};
		setID(btns, passIdByRef);
	}, []);

	const handleClick = (e, dispatch) => {
		console.log(e.target.id)
		console.log(e.target)
		dispatch({type: e.target.id})
	}

	const getSimpleKey = () => Math.floor(Math.random() * 100000).toString(36);

	return (
		<>
			<div ref={compRef} id="mainSB" className="mainSideBar">
				{icons.map(icon => <button key={getSimpleKey()} className="btn" onClick={handleClick}>{icon}</button>)}
			</div>
			<SecondSideBar compRef={compRef}/>
		</>
	)
}

export default DoubleSidebar