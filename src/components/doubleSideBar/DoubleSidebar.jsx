import {useState, useReducer, useEffect, createRef} from 'react';
import {FiHome, FiDatabase, FiPlus, FiBarChart, FiUsers, FiSettings, FiHelpCircle} from "react-icons/fi";
import SecondSideBar from './SecondSideBar';
import "../../styles/DSB.css";

const init = {type: "7"};

const reducer = (state, action) => {
	if(state.type === action.type) return {type: "7"};
	switch(action.type){
		case "0": {
			console.log("0")
			return {type: "0"};
		};
		case "1": {
			console.log("1");
			return {type: "1"};
		};
		case "2": {
			console.log("2");
			return {type: "2"};
		};
		case "3": {
			console.log("3");
			return {type: "3"};
		};
		case "4": {
			console.log("4");
			return {type: "4"};
		};
		case "5": {
			console.log("5");
			return {type: "5"};
		};
		case "6": {
			console.log("6");
			return {type: "6"};
		};
		default: console.log("Not Such Action Found.", "State: ", state, "Action: ", action);
	}
}

const DoubleSidebar = () => {
	const [icons, setIcons] = useState([<FiHome/>, <FiDatabase/>, <FiPlus/>, <FiBarChart/>, <FiUsers/>, <FiSettings/>, <FiHelpCircle/>]);
	const [compRef, setCompRef] = useState(createRef());
	const [state, dispatch] = useReducer(reducer, init);

	//Set all Children Elements a Common ID
	const ID = (parent, id) => {
		const {children, childElementCount} = parent;

		//BaSS Case
		if(childElementCount === 0){parent.id = id; return;}

		for(let i=0;i<childElementCount;i++){
			ID(children[i], id);
		}
		parent.id = id;
		return;
	}

	const setID = (parents) => {
		const parentsCount = parents.length;
		for(let i=0;i<parentsCount;i++) ID(parents[i], i);
	}

	useEffect(() => {
		//Set all the corresponding ids
		const btns = document.getElementsByClassName("btn");
		setID(btns);
	}, [state]);

	const handleClick = e => dispatch({type: e.target.id});

	const getSimpleKey = () => Math.floor(Math.random() * 100000).toString(36);

	return (
		<>
			<div ref={compRef} id="mainSB" className="mainSideBar">
				{icons.map(icon => <button key={getSimpleKey()} className="btn" onClick={handleClick}>{icon}</button>)}
			</div>
			<SecondSideBar compRef={compRef} active={state.type}/>
		</>
	)
}

export default DoubleSidebar;